const { Router } = require('express');

const foodsRoutes = Router();

const FoodsController = require('../controllers/FoodsController');

const foodsController = new FoodsController();

const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const adminAuthorizationMiddleware = require('../middlewares/adminAuthorizationMiddleware');

foodsRoutes.get('/:id', authenticationMiddleware, foodsController.show);
foodsRoutes.post('/', authenticationMiddleware, adminAuthorizationMiddleware, foodsController.create);

module.exports = foodsRoutes;