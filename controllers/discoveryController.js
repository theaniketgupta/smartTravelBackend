import { DiscoveryService } from '../services/discoveryService.js';

// Initialize service
const discoveryService = new DiscoveryService();

// Controller for discovery endpoint
export const getDiscoveryResults = async (req, res) => {
  try {
    // Extract validated query parameters
    const searchCriteria = {
      startingCity: req.query.startingCity,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      flightBudget: req.query.flightBudget,
      hotelBudget: req.query.hotelBudget,
      activitiesBudget: req.query.activitiesBudget,
      totalBudget: req.query.totalBudget,
      vacationType: req.query.vacationType,
      numberOfPeople: req.query.numberOfPeople
    };

    console.log('Discovery request received:', searchCriteria);

    // Call service layer to get filtered destinations
    const result = await discoveryService.getFilteredDestinations(searchCriteria);

    res.json({
      success: true,
      data: result,
      meta: {
        timestamp: new Date().toISOString(),
        processingTime: `${Date.now() - req.startTime}ms`,
        apiVersion: 'v2'
      }
    });

  } catch (error) {
    console.error('Discovery controller error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error occurred while processing discovery request',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
      timestamp: new Date().toISOString()
    });
  }
};

// Additional controller methods for enhanced functionality

/**
 * Get popular destinations
 */
export const getPopularDestinations = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const result = await discoveryService.getPopularDestinations(limit);

    res.json({
      success: true,
      data: result,
      meta: {
        timestamp: new Date().toISOString(),
        apiVersion: 'v2'
      }
    });

  } catch (error) {
    console.error('Popular destinations controller error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error occurred while fetching popular destinations',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
};

/**
 * Get destination statistics
 */
export const getDestinationStats = async (req, res) => {
  try {
    const stats = await discoveryService.getDestinationStats();

    res.json({
      success: true,
      data: stats,
      meta: {
        timestamp: new Date().toISOString(),
        apiVersion: 'v2'
      }
    });

  } catch (error) {
    console.error('Destination stats controller error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error occurred while fetching destination statistics',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
};
