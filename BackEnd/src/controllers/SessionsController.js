const SessionsRepository = require('../repositories/SessionsRepository');
const SessionsCreateService = require('../services/SessionsCreateService');

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const sessionsRepository = new SessionsRepository();
    const sessionsCreateService = new SessionsCreateService(sessionsRepository);

    const { user, token } = await sessionsCreateService.execute({ email, password });
    
    return response.json({ user, token });
  }
}

module.exports = SessionsController;