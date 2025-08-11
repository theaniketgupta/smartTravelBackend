import express from "express";
import {
  discoveryValidationRules,
  validateDiscovery,
} from "../Validators/discoveryValidator.js";
import { getDiscoveryResults } from "../controllers/discoveryController.js";

const router = express.Router();

// GET /api/v2/discovery - Get travel destinations based on search criteria
router.get(
  "/",
  discoveryValidationRules(),
  validateDiscovery,
  getDiscoveryResults
);

export default router;
