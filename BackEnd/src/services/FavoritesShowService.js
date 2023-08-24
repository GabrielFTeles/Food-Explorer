const AppError = require("../utils/AppError");

class FavoritesShowService {
  constructor(favoritesRepository) {
    this.favoritesRepository = favoritesRepository;
  }

  async execute({ user_id, dish_id }) {
    const favorite = await this.favoritesRepository.getFavoriteByDishId({ user_id, dish_id });

    return favorite ? true : false;
  }
}

module.exports = FavoritesShowService;