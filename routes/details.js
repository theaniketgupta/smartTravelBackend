import express from "express";
import {
  detailsValidationRules,
  validateDetails,
} from "../Validators/detailsValidator.js";
import { getDestinationDetails } from "../controllers/detailsController.js";

const router = express.Router();

// GET /api/v2/details/:id - Get detailed information about a specific destination
router.get(
  "/:id",
  detailsValidationRules(),
  validateDetails,
  getDestinationDetails
);

export default router;
