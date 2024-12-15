import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: savedUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ message: "Server Error: Unable to register user." });
  }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: 'User not found.' });
        }
    
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid password.' });
        }
    
        // Generate JWT
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );
    
        return res.status(200).json({
          success: true,
          message: 'Logged in successfully.',
          token,
        });
      } catch (error) {
        console.error('Error logging in user:', error);
        return res.status(500).json({ message: 'Server Error: Unable to log in.' });
      }
};
