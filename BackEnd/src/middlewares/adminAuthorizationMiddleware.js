const AppError = require('../utils/AppError');

function adminAuthorizationMiddleware (request, response, next) {
  if (!request.user.isAdmin) {
    throw new AppError('User is not authorized to perform this action.', 403);
  }

  return next();
}

module.exports = adminAuthorizationMiddleware;