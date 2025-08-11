import { DetailsService } from '../services/detailsService.js';

// Initialize service
const detailsService = new DetailsService();

// Controller for details endpoint
export const getDestinationDetails = async (req, res) => {
  try {
    const { id } = req.params;
    
    console.log(`Details request received for destination ID: ${id}`);

    // Call service layer to get destination details
    const result = await detailsService.getDestinationDetails(parseInt(id));

    res.json({
      success: true,
      data: result.destination,
      meta: {
        ...result.metadata,
        timestamp: new Date().toISOString(),
        processingTime: `${Date.now() - req.startTime}ms`,
        apiVersion: 'v2'
      }
    });

  } catch (error) {
    console.error('Details controller error:', error);
    
    // Handle specific error types
    if (error.message.includes('not found')) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found',
        error: error.message,
        availableIds: await detailsService.getAllDestinationIds(),
        timestamp: new Date().toISOString()
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error occurred while fetching destination details',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
      timestamp: new Date().toISOString()
    });
  }
};

// Additional controller methods for enhanced functionality

/**
 * Get destination statistics
 */
export const getDestinationStatistics = async (req, res) => {
  try {
    const { id } = req.params;
    
    console.log(`Destination statistics request for ID: ${id}`);

    // Check if destination exists first
    const exists = await detailsService.destinationExists(parseInt(id));
    if (!exists) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found',
        error: `No destination found with ID: ${id}`
      });
    }

    const stats = await detailsService.getDestinationStats(parseInt(id));

    res.json({
      success: true,
      data: stats,
      meta: {
        timestamp: new Date().toISOString(),
        apiVersion: 'v2'
      }
    });

  } catch (error) {
    console.error('Destination statistics controller error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error occurred while fetching destination statistics',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
};
