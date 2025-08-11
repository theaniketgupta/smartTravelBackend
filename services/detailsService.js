import { getDestinationById, getTotalDestinationsCount } from '../data/mockDestinations.js';

export class DetailsService {
  
  /**
   * Get detailed information about a specific destination
   * @param {number} destinationId - The ID of the destination
   * @returns {Object} - Detailed destination information
   */
  async getDestinationDetails(destinationId) {
    const destination = getDestinationById(destinationId);
    
    if (!destination) {
      throw new Error(`Destination with ID ${destinationId} not found`);
    }

    // Add additional computed fields for detailed view
    const enhancedDestination = {
      ...destination,
      totalActivities: destination.activities ? destination.activities.length : 0,
      totalImages: destination.images ? destination.images.length : 0,
      accommodationOptions: destination.accommodation ? Object.keys(destination.accommodation).filter(key => key !== 'recommendations').length : 0,
      safetyScore: this.calculateSafetyScore(destination),
      popularityScore: this.calculatePopularityScore(destination),
      budgetFriendliness: this.calculateBudgetFriendliness(destination),
      seasonalRecommendation: this.getSeasonalRecommendation(destination),
      nearbyDestinations: await this.getNearbyDestinations(destination, 3)
    };

    return {
      destination: enhancedDestination,
      metadata: {
        totalDestinationsAvailable: getTotalDestinationsCount(),
        lastUpdated: new Date().toISOString(),
        dataSource: 'mock_database',
        relatedDestinationsCount: enhancedDestination.nearbyDestinations.length
      }
    };
  }

  /**
   * Calculate safety score based on destination data
   * @param {Object} destination - Destination object
   * @returns {number} - Safety score (1-10)
   */
  calculateSafetyScore(destination) {
    // Simple algorithm based on available safety tips and country
    let score = 8; // Base score
    
    if (destination.safetyTips && destination.safetyTips.length > 0) {
      score += Math.min(destination.safetyTips.length * 0.2, 1);
    }
    
    // Adjust based on country (simplified logic)
    const safeDevelopedCountries = ['Switzerland', 'Japan', 'United States', 'France'];
    if (safeDevelopedCountries.includes(destination.country)) {
      score += 0.5;
    }
    
    return Math.min(Math.round(score * 10) / 10, 10);
  }

  /**
   * Calculate popularity score based on rating and reviews
   * @param {Object} destination - Destination object
   * @returns {number} - Popularity score (1-10)
   */
  calculatePopularityScore(destination) {
    const rating = destination.rating || 0;
    const reviewCount = destination.reviewCount || 0;
    
    // Normalize review count (assuming max 10000 reviews for scale)
    const normalizedReviews = Math.min(reviewCount / 1000, 10);
    
    // Weighted average of rating and review volume
    const score = (rating * 0.7) + (normalizedReviews * 0.3);
    
    return Math.round(score * 10) / 10;
  }

  /**
   * Calculate budget friendliness score
   * @param {Object} destination - Destination object
   * @returns {string} - Budget category
   */
  calculateBudgetFriendliness(destination) {
    if (!destination.estimatedBudget) return 'Unknown';
    
    // Extract budget ranges and calculate average
    const budgetRanges = destination.estimatedBudget;
    const budgetValues = Object.values(budgetRanges).map(range => {
      if (typeof range === 'string') {
        const numbers = range.match(/\d+/g);
        if (numbers && numbers.length >= 2) {
          return (parseInt(numbers[0]) + parseInt(numbers[1])) / 2;
        }
      }
      return 0;
    });
    
    const averageBudget = budgetValues.reduce((sum, val) => sum + val, 0) / budgetValues.length;
    
    if (averageBudget < 75) return 'Budget-Friendly';
    if (averageBudget < 150) return 'Mid-Range';
    return 'Luxury';
  }

  /**
   * Get seasonal recommendation for the destination
   * @param {Object} destination - Destination object
   * @returns {Object} - Seasonal recommendation
   */
  getSeasonalRecommendation(destination) {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const bestMonths = destination.bestMonths || [];
    
    const isCurrentlyBestTime = bestMonths.includes(currentMonth);
    
    return {
      currentMonth,
      isBestTime: isCurrentlyBestTime,
      bestMonths: bestMonths,
      recommendation: isCurrentlyBestTime 
        ? `${currentMonth} is an excellent time to visit ${destination.name}!`
        : `Consider visiting ${destination.name} during ${bestMonths.slice(0, 3).join(', ')} for the best experience.`
    };
  }

  /**
   * Get nearby destinations based on continent and type
   * @param {Object} destination - Current destination
   * @param {number} limit - Number of nearby destinations to return
   * @returns {Array} - Array of nearby destinations
   */
  async getNearbyDestinations(destination, limit = 3) {
    const { mockDestinations } = await import('../data/mockDestinations.js');
    
    // Filter destinations by same continent or similar type, excluding current destination
    const nearby = mockDestinations
      .filter(dest => 
        dest.id !== destination.id && 
        (dest.continent === destination.continent || dest.type === destination.type)
      )
      .sort((a, b) => {
        // Prioritize same continent, then same type, then rating
        if (a.continent === destination.continent && b.continent !== destination.continent) return -1;
        if (b.continent === destination.continent && a.continent !== destination.continent) return 1;
        if (a.type === destination.type && b.type !== destination.type) return -1;
        if (b.type === destination.type && a.type !== destination.type) return 1;
        return b.rating - a.rating;
      })
      .slice(0, limit)
      .map(dest => ({
        id: dest.id,
        name: dest.name,
        type: dest.type,
        country: dest.country,
        continent: dest.continent,
        rating: dest.rating,
        image: dest.images[0],
        description: dest.description,
        relationship: dest.continent === destination.continent ? 'Same Region' : 'Similar Experience'
      }));

    return nearby;
  }

  /**
   * Get destination statistics for a specific destination
   * @param {number} destinationId - The ID of the destination
   * @returns {Object} - Destination-specific statistics
   */
  async getDestinationStats(destinationId) {
    const destination = getDestinationById(destinationId);
    
    if (!destination) {
      throw new Error(`Destination with ID ${destinationId} not found`);
    }

    const { mockDestinations } = await import('../data/mockDestinations.js');
    
    // Calculate ranking among all destinations
    const sortedByRating = [...mockDestinations].sort((a, b) => b.rating - a.rating);
    const rankByRating = sortedByRating.findIndex(dest => dest.id === destinationId) + 1;
    
    // Calculate ranking within same type
    const sameTypeDestinations = mockDestinations.filter(dest => dest.type === destination.type);
    const sortedSameType = sameTypeDestinations.sort((a, b) => b.rating - a.rating);
    const rankInCategory = sortedSameType.findIndex(dest => dest.id === destinationId) + 1;
    
    return {
      destinationId,
      overallRanking: {
        position: rankByRating,
        outOf: mockDestinations.length,
        percentile: Math.round(((mockDestinations.length - rankByRating + 1) / mockDestinations.length) * 100)
      },
      categoryRanking: {
        position: rankInCategory,
        outOf: sameTypeDestinations.length,
        category: destination.type,
        percentile: Math.round(((sameTypeDestinations.length - rankInCategory + 1) / sameTypeDestinations.length) * 100)
      },
      competitorAnalysis: {
        averageRatingInCategory: Math.round((sameTypeDestinations.reduce((sum, dest) => sum + dest.rating, 0) / sameTypeDestinations.length) * 10) / 10,
        averageReviewsInCategory: Math.round(sameTypeDestinations.reduce((sum, dest) => sum + dest.reviewCount, 0) / sameTypeDestinations.length),
        performanceVsAverage: {
          rating: Math.round((destination.rating - (sameTypeDestinations.reduce((sum, dest) => sum + dest.rating, 0) / sameTypeDestinations.length)) * 10) / 10,
          reviews: destination.reviewCount - Math.round(sameTypeDestinations.reduce((sum, dest) => sum + dest.reviewCount, 0) / sameTypeDestinations.length)
        }
      }
    };
  }

  /**
   * Get all available destination IDs
   * @returns {Array} - Array of all destination IDs
   */
  async getAllDestinationIds() {
    const { mockDestinations } = await import('../data/mockDestinations.js');
    return mockDestinations.map(dest => dest.id);
  }

  /**
   * Check if destination exists
   * @param {number} destinationId - The ID to check
   * @returns {boolean} - Whether destination exists
   */
  async destinationExists(destinationId) {
    const destination = getDestinationById(destinationId);
    return !!destination;
  }
}
