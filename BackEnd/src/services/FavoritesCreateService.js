class FavoritesCreateService {
  constructor(favoritesRepository) {
    this.favoritesRepository = favoritesRepository;
  }

  async execute({ user_id, dish_id }) {
    await this.favoritesRepository.createFavorite({ user_id, dish_id });
  }
}

module.exports = FavoritesCreateService;