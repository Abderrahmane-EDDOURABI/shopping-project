import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Récupération du token

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  try {
    // Vérification du token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Ajoute l'utilisateur décodé à la requête

    next(); // Passe au middleware suivant ou au contrôleur
  } catch (error) {
    console.error("JWT Error:", error);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

// Middleware to verify JWT and admin role
export const verifyTokenAndAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add decoded user to request

    // Check if user is an admin
    const user = await User.findById(req.user.id);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Access Denied. Admins only." });
    }

    next(); // Proceed if admin
  } catch (error) {
    console.error("JWT Error:", error);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
