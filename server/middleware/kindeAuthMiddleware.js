const kinde = require('../config/kindeConfig');

exports.protect = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Not authorized, token missing' });

    const verifiedUser = kinde.verifyToken(token);
    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Not authorized, token verification failed' });
  }
};
