const { Router } = require('express');

const routes = Router();

const usersRoutes = require('./users.routes');
const sessionsRoutes = require('./sessions.routes');
const foodsRoutes = require('./foods.routes');

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/foods', foodsRoutes);

module.exports = routes;