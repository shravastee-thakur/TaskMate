import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token; // Extract token from cookies

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No token found" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user and attach to req
    req.user = await userModel.findById(decoded.id).select("-password");

    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    next(); // Proceed to the next middleware/controller
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};
