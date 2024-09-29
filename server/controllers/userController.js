import User from '../models/User'; // Assuming you have a User model

// Fetch user profile
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have user authentication middleware
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile.' });
  }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body; // Assuming these are the fields to update
    const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile.' });
  }
};
