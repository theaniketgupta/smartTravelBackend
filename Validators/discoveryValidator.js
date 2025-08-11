import { body, query, validationResult } from "express-validator";

// Validation rules for discovery endpoint

export const discoveryValidationRules = () => {
  return [
    // Starting city validation
    query("startingCity")
      .notEmpty()
      .withMessage("Starting city is required")
      .isString()
      .withMessage("Starting city must be a string")
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage("Starting city must be between 2 and 100 characters"),

    // Start date validation
    query("startDate")
      .notEmpty()
      .withMessage("Start date is required")
      .isISO8601()
      .withMessage("Start date must be in valid ISO format (YYYY-MM-DD)")
      .custom((value) => {
        const startDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (startDate < today) {
          throw new Error("Start date cannot be in the past");
        }
        return true;
      }),

    // End date validation
    query("endDate")
      .notEmpty()
      .withMessage("End date is required")
      .isISO8601()
      .withMessage("End date must be in valid ISO format (YYYY-MM-DD)")
      .custom((value, { req }) => {
        const endDate = new Date(value);
        const startDate = new Date(req.query.startDate);

        if (endDate <= startDate) {
          throw new Error("End date must be after start date");
        }

        // Check if trip duration is reasonable (max 365 days)
        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 365) {
          throw new Error("Trip duration cannot exceed 365 days");
        }

        return true;
      }),

    // Flight budget validation
    query("flightBudget")
      .notEmpty()
      .withMessage("Flight budget is required")
      .isFloat({ min: 0, max: 50000 })
      .withMessage("Flight budget must be a number between 0 and 50000"),

    // Hotel budget validation
    query("hotelBudget")
      .notEmpty()
      .withMessage("Hotel budget is required")
      .isFloat({ min: 0, max: 50000 })
      .withMessage("Hotel budget must be a number between 0 and 50000"),

    // Activities budget validation
    query("activitiesBudget")
      .notEmpty()
      .withMessage("Activities budget is required")
      .isFloat({ min: 0, max: 50000 })
      .withMessage("Activities budget must be a number between 0 and 50000"),

    // Vacation type validation (must match frontend options)
    query("vacationType")
      .notEmpty()
      .withMessage("Vacation type is required")
      .isIn([
        "Beach",
        "Hiking",
        "Casinos",
        "Family Fun",
        "Food",
        "Culture",
        "Adventure",
        "Relaxation",
        "City Break",
        "Wildlife",
      ])
      .withMessage(
        "Invalid vacation type. Must be one of: Beach, Hiking, Casinos, Family Fun, Food, Culture, Adventure, Relaxation, City Break, Wildlife"
      ),

    // Number of people validation
    query("numberOfPeople")
      .notEmpty()
      .withMessage("Number of people is required")
      .isInt({ min: 1, max: 20 })
      .withMessage("Number of people must be between 1 and 20"),
  ];
};

// Middleware to check validation results
export const validateDiscovery = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
        value: error.value,
      })),
    });
  }

  // Additional custom validation for budget consistency
  const { flightBudget, hotelBudget, activitiesBudget, totalBudget } =
    req.query;

  if (totalBudget) {
    const calculatedTotal =
      parseFloat(flightBudget) +
      parseFloat(hotelBudget) +
      parseFloat(activitiesBudget);
    const providedTotal = parseFloat(totalBudget);

    // Allow small floating point differences
    if (Math.abs(calculatedTotal - providedTotal) > 0.01) {
      return res.status(400).json({
        success: false,
        message: "Budget validation failed",
        errors: [
          {
            field: "totalBudget",
            message: `Total budget (${providedTotal}) does not match sum of individual budgets (${calculatedTotal})`,
            value: totalBudget,
          },
        ],
      });
    }
  }

  next();
};
