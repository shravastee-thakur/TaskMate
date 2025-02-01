import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import connectDb from "./Db/connectDb.js";
connectDb();

const PORT = process.env.PORT || 4000;
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/userRoutes.js";

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRoutes);
// http://localhost:3000/api/v1/user/signUp

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
