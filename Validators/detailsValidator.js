import { param, validationResult } from 'express-validator';

// Validation rules for details endpoint
export const detailsValidationRules = () => {
  return [
    // ID parameter validation
    param('id')
      .notEmpty()
      .withMessage('Destination ID is required')
      .isInt({ min: 1 })
      .withMessage('Destination ID must be a positive integer')
      .toInt()
  ];
};

// Middleware to check validation results
export const validateDetails = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  
  next();
};
