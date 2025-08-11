import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();
const app = express();

// CORS configuration - allow requests from frontend domain only
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests from localhost (development) and specific frontend domain
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5175',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5174',
      'http://127.0.0.1:5175'
    ];
    
    // Allow requests with no origin (like mobile apps or curl requests) in development
    if (!origin && process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS policy'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// v2 APIs
app.use("/api/v2", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
