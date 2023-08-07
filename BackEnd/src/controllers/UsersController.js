const UsersRepository = require('../repositories/UsersRepository');
const UsersCreateService = require('../services/UsersCreateService');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const usersCreateService = new UsersCreateService(usersRepository);

    await usersCreateService.execute({ name, email, password });

    return response.status(201).json();
  }
}

module.exports = UsersController;