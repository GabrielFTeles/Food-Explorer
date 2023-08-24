const AppError = require('../utils/AppError');

class FavoritesDeleteService {
  constructor(favoritesRepository) {
    this.favoritesRepository = favoritesRepository;
  }

  async execute({ user_id, dish_id }) {
    const favoriteExists = await this.favoritesRepository.getFavoriteByDishId({ user_id, dish_id });

    if (!favoriteExists) throw new AppError('O prato favoritado não foi encontrado', 404);

    await this.favoritesRepository.deleteFavorite({ user_id, dish_id });
  }
}

module.exports = FavoritesDeleteService;