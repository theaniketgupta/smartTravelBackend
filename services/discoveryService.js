import { mockDestinations, getTotalDestinationsCount } from '../data/mockDestinations.js';
import { calculateDuration } from '../helper.js';

export class DiscoveryService {
  
  /**
   * Get filtered destinations based on search criteria
   * @param {Object} searchCriteria - The search parameters
   * @returns {Object} - Filtered destinations with metadata
   */
  async getFilteredDestinations(searchCriteria) {
    const {
      startingCity,
      startDate,
      endDate,
      flightBudget,
      hotelBudget,
      activitiesBudget,
      totalBudget,
      vacationType,
      numberOfPeople
    } = searchCriteria;

    // Calculate total budget if not provided
    const calculatedTotalBudget = totalBudget || 
      (parseFloat(flightBudget) + parseFloat(hotelBudget) + parseFloat(activitiesBudget));

    // Apply cost multipliers to destinations based on budget
    let processedDestinations = mockDestinations.map(dest => {
      const estimatedCost = calculatedTotalBudget * dest.baseCosts.totalMultiplier;
      const flightCost = parseFloat(flightBudget) * dest.baseCosts.flightMultiplier;
      const hotelCost = parseFloat(hotelBudget) * dest.baseCosts.hotelMultiplier;
      const activitiesCost = parseFloat(activitiesBudget) * dest.baseCosts.activitiesMultiplier;

      return {
        id: dest.id,
        name: dest.name,
        type: dest.type,
        country: dest.country,
        continent: dest.continent,
        estimatedCost: Math.round(estimatedCost),
        flightCost: Math.round(flightCost),
        hotelCost: Math.round(hotelCost),
        activitiesCost: Math.round(activitiesCost),
        image: dest.images[0], // Use first image as primary
        description: dest.description,
        duration: calculateDuration(startDate, endDate),
        suitableFor: vacationType,
        rating: dest.rating,
        reviewCount: dest.reviewCount,
        bestMonths: dest.bestMonths,
        coordinates: dest.coordinates
      };
    });

    // Filter by vacation type if specified
    if (vacationType && vacationType !== '') {
      processedDestinations = processedDestinations.filter(dest => 
        dest.type.toLowerCase() === vacationType.toLowerCase() || 
        dest.suitableFor.toLowerCase() === vacationType.toLowerCase()
      );
    }

    // Filter by budget (allow 15% flexibility for better results)
    const budgetLimit = calculatedTotalBudget * 1.15;
    processedDestinations = processedDestinations.filter(dest => 
      dest.estimatedCost <= budgetLimit
    );

    // Sort by rating and cost efficiency
    processedDestinations.sort((a, b) => {
      const aScore = a.rating * (calculatedTotalBudget / a.estimatedCost);
      const bScore = b.rating * (calculatedTotalBudget / b.estimatedCost);
      return bScore - aScore;
    });

    // Limit results to top 10
    processedDestinations = processedDestinations.slice(0, 10);

    // Calculate per-person costs
    const numberOfTravelers = parseInt(numberOfPeople);
    processedDestinations = processedDestinations.map(dest => ({
      ...dest,
      costPerPerson: Math.round(dest.estimatedCost / numberOfTravelers),
      flightCostPerPerson: Math.round(dest.flightCost / numberOfTravelers),
      hotelCostPerPerson: Math.round(dest.hotelCost / numberOfTravelers),
      activitiesCostPerPerson: Math.round(dest.activitiesCost / numberOfTravelers)
    }));

    return {
      destinations: processedDestinations,
      totalResults: processedDestinations.length,
      totalAvailableDestinations: getTotalDestinationsCount(),
      searchCriteria: {
        startingCity,
        startDate,
        endDate,
        totalBudget: calculatedTotalBudget,
        vacationType,
        numberOfPeople: numberOfTravelers,
        tripDuration: calculateDuration(startDate, endDate)
      },
      budgetAnalysis: {
        requestedBudget: calculatedTotalBudget,
        averageDestinationCost: processedDestinations.length > 0 
          ? Math.round(processedDestinations.reduce((sum, dest) => sum + dest.estimatedCost, 0) / processedDestinations.length)
          : 0,
        budgetUtilization: processedDestinations.length > 0
          ? Math.round((processedDestinations[0].estimatedCost / calculatedTotalBudget) * 100)
          : 0,
        savingsOpportunity: processedDestinations.length > 0
          ? Math.max(0, calculatedTotalBudget - processedDestinations[0].estimatedCost)
          : 0
      },
      filterStats: {
        totalDestinationsInDatabase: getTotalDestinationsCount(),
        destinationsMatchingType: vacationType ? this.getDestinationCountByType(vacationType) : getTotalDestinationsCount(),
        destinationsWithinBudget: processedDestinations.length,
        budgetFlexibilityApplied: '15%'
      }
    };
  }

  /**
   * Get count of destinations by type
   * @param {string} type - Vacation type
   * @returns {number} - Count of destinations
   */
  getDestinationCountByType(type) {
    return mockDestinations.filter(dest => 
      dest.type.toLowerCase() === type.toLowerCase()
    ).length;
  }

  /**
   * Get popular destinations (top rated)
   * @param {number} limit - Number of destinations to return
   * @returns {Array} - Popular destinations
   */
  async getPopularDestinations(limit = 5) {
    const sortedByRating = [...mockDestinations]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);

    return {
      destinations: sortedByRating.map(dest => ({
        id: dest.id,
        name: dest.name,
        type: dest.type,
        rating: dest.rating,
        reviewCount: dest.reviewCount,
        image: dest.images[0],
        description: dest.description
      })),
      totalCount: limit,
      totalAvailable: getTotalDestinationsCount()
    };
  }

  /**
   * Get destination statistics
   * @returns {Object} - Statistics about destinations
   */
  async getDestinationStats() {
    const types = [...new Set(mockDestinations.map(dest => dest.type))];
    const continents = [...new Set(mockDestinations.map(dest => dest.continent))];
    
    const typeStats = types.map(type => ({
      type,
      count: this.getDestinationCountByType(type),
      averageRating: this.getAverageRatingByType(type)
    }));

    const continentStats = continents.map(continent => ({
      continent,
      count: mockDestinations.filter(dest => dest.continent === continent).length
    }));

    return {
      totalDestinations: getTotalDestinationsCount(),
      destinationTypes: typeStats,
      continents: continentStats,
      averageRating: this.getOverallAverageRating(),
      totalReviews: mockDestinations.reduce((sum, dest) => sum + dest.reviewCount, 0)
    };
  }

  /**
   * Get average rating by type
   * @param {string} type - Vacation type
   * @returns {number} - Average rating
   */
  getAverageRatingByType(type) {
    const destinations = mockDestinations.filter(dest => 
      dest.type.toLowerCase() === type.toLowerCase()
    );
    
    if (destinations.length === 0) return 0;
    
    const totalRating = destinations.reduce((sum, dest) => sum + dest.rating, 0);
    return Math.round((totalRating / destinations.length) * 10) / 10;
  }

  /**
   * Get overall average rating
   * @returns {number} - Overall average rating
   */
  getOverallAverageRating() {
    const totalRating = mockDestinations.reduce((sum, dest) => sum + dest.rating, 0);
    return Math.round((totalRating / mockDestinations.length) * 10) / 10;
  }
}
