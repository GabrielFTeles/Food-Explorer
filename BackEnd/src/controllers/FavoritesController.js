const FavoritesRepository = require('../repositories/FavoritesRepository');
const FavoritesIndexService = require('../services/FavoritesIndexService');
const FavoritesShowService = require('../services/FavoritesShowService');
const FavoritesCreateService = require('../services/FavoritesCreateService');
const FavoritesDeleteService = require('../services/FavoritesDeleteService');

class FavoritesController {
  async index(request, response) {
    const { id: user_id } = request.user;

    const favoritesRepository = new FavoritesRepository();
    const favoritesIndexService = new FavoritesIndexService(favoritesRepository);

    const favorites = await favoritesIndexService.execute({ user_id });

    return response.json(favorites);
  }

  async show(request, response) {
    const { dish_id } = request.params;
    const { id: user_id } = request.user;

    const favoritesRepository = new FavoritesRepository();
    const favoritesShowService = new FavoritesShowService(favoritesRepository);

    const isFavorited = await favoritesShowService.execute({ user_id, dish_id });

    return response.json({ isFavorited });
  }

  async create(request, response) {
    const { dish_id } = request.params;
    const { id: user_id } = request.user;

    const favoritesRepository = new FavoritesRepository();
    const favoritesCreateService = new FavoritesCreateService(favoritesRepository);

    await favoritesCreateService.execute({ user_id, dish_id });

    return response.status(201).json();
  }

  async delete(request, response) {
    const { dish_id } = request.params;
    const { id: user_id } = request.user;

    const favoritesRepository = new FavoritesRepository();
    const favoritesDeleteService = new FavoritesDeleteService(favoritesRepository);

    await favoritesDeleteService.execute({ user_id, dish_id });

    return response.json();
  }
}

module.exports = FavoritesController;