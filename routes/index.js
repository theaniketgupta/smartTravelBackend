import express from "express";
import discoveryRoutes from "./discovery.js";
import detailsRoutes from "./details.js";

const router = express.Router();

// Mount the routes
router.use("/destination-discovery", discoveryRoutes);
router.use("/itinerary-details", detailsRoutes);

export default router;
