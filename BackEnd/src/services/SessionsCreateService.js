const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');

class SessionsCreateService {
  constructor(sessionsRepository) {
    this.sessionsRepository = sessionsRepository;
  }

  async execute({ email, password }) {
    const user = await this.sessionsRepository.getUserByEmail(email);

    if (!user) {
      throw new AppError('E-mail or password invalid.', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('E-mail or password invalid.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({
      isAdmin: String(user.is_admin)
    }, secret, {
      subject: String(user.id),
      expiresIn
    });

    return { user: {
      name: user.name,
    }, token};
  }
}

module.exports = SessionsCreateService;