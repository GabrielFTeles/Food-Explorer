const { Router } = require('express');

const dishesRoutes = Router();

const DishesController = require('../controllers/DishesController');

const dishesController = new DishesController();

const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const adminAuthorizationMiddleware = require('../middlewares/adminAuthorizationMiddleware');

dishesRoutes.get('/:id', authenticationMiddleware, dishesController.show);
dishesRoutes.get('/', authenticationMiddleware, dishesController.index);

dishesRoutes.post('/', authenticationMiddleware, adminAuthorizationMiddleware, dishesController.create);
dishesRoutes.put('/:id', authenticationMiddleware, adminAuthorizationMiddleware, dishesController.update);
dishesRoutes.delete('/:id', authenticationMiddleware, adminAuthorizationMiddleware, dishesController.delete);

module.exports = dishesRoutes;