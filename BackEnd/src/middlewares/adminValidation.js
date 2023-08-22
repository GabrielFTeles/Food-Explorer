const AppError = require('../utils/AppError');

function adminValidation (request, response, next) {
  if (!request.user.isAdmin) {
    throw new AppError('User does not have permission to access this resource', 403);
  }

  return next();
}

module.exports = adminValidation;