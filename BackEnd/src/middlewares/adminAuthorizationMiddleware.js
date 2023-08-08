const AppError = require('../utils/AppError');

function adminAuthorizationMiddleware (request, response, next) {
  if (!request.user.isAdmin) {
    throw new AppError('User does not have permission to access this resource', 403);
  }

  return next();
}

module.exports = adminAuthorizationMiddleware;