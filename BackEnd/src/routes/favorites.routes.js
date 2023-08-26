const { Router } = require('express');

const favoritesRoutes = Router();

const FavoritesController = require('../controllers/FavoritesController');

const favoritesController = new FavoritesController();

const authenticatedValidation = require('../middlewares/authenticatedValidation');

favoritesRoutes.get('/', authenticatedValidation, favoritesController.index);
favoritesRoutes.get('/:dish_id', authenticatedValidation, favoritesController.show);
favoritesRoutes.post('/:dish_id', authenticatedValidation, favoritesController.create);
favoritesRoutes.delete('/:dish_id', authenticatedValidation, favoritesController.delete);

module.exports = favoritesRoutes;