import express from "express";
import { login, logout, signUp } from "../Controllers/userControllers.js";
import { loginValidation, signupValidation } from "../Middlewares/Auth.js";

const router = express.Router();

// Signup
router.post("/signUp", signupValidation, signUp);

// Login
router.post("/login", loginValidation, login);

// Logout
router.post("/logout", logout);

export default router;
