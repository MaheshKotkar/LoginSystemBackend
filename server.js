// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import { errorHandler } from "./middlewares/errorHandler.js";

// dotenv.config();
// connectDB();

// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use("/api/auth", authRoutes);

// // Error handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
connectDB(); // connects to MongoDB

const app = express();

app.use(express.json());
app.use(cors());

// Auth routes
app.use("/api/auth", authRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

