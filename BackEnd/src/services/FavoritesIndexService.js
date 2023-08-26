class FavoritesIndexService {
  constructor(favoritesRepository) {
    this.favoritesRepository = favoritesRepository;
  }

  async execute({ user_id }) {
    const favorites = await this.favoritesRepository.getFavoritesFromUser(user_id);

    const formattedFavorites = favorites.map(favorite => ({
      ...favorite,
      isFavorite: true,
    }))

    return formattedFavorites;
  }
}

module.exports = FavoritesIndexService;