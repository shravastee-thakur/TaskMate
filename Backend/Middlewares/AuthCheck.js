// import jwt from "jsonwebtoken";

// export const authenticateToken = (req, res, next) => {
//   try {
//     if (!req.cookies) {
//       return res.status(401).json({
//         success: false,
//         message: "No cookies found. Please log in.",
//       });
//     }
//     const token = req.cookies.token;
//     if (!token) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Token not found" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (!decoded) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Token decode error" });
//     }
//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({ success: false, message: "Invalid token" });
//   }
// };

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
