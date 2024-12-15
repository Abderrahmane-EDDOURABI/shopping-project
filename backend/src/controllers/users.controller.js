export const getProfileInfos = async (req, res) => {
  try {
    return res.status(200).json({
        success: true,
        message: 'Access granted.',
        user: req.user, // Informations extraites du token
      });
  } catch (error) {
    // Handle errors
    console.error('Error fetching profile infos :', error);
    return res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch profile infos',
    });
  }
};
