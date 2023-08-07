const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

function authenticationMiddleware (request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub, isAdmin } = decoded;

    request.user = {
      id: +sub,
      isAdmin: +isAdmin,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}

module.exports = authenticationMiddleware;