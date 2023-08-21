const AppError = require('../utils/AppError');
const { hash } = require('bcryptjs');

class UsersCreateService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, email, password }) {
    const emailAlreadyInUse = await this.usersRepository.getUserByEmail(email);

    const regexEmail = new RegExp('^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$');

    if (!regexEmail.test(email)) {
      throw new AppError('Por favor insira um E-mail válido.', 401);
    }

    if (emailAlreadyInUse) {
      throw new AppError("E-mail já está em uso.", 401);
    }

    const hashedPassword = await hash(password, 8);

    const userCreated = await this.usersRepository.create({ name, email, password: hashedPassword });

    return userCreated;
  }
}

module.exports = UsersCreateService;