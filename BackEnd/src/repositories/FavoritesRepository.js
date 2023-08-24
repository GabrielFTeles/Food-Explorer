const knex = require('../database/knex');

class FavoritesRepository {
  async getFavoriteByDishId({ user_id, dish_id }) {
    const [favorite] = await knex('favorites')
      .where({ user_id, dish_id });

    return favorite;
  }

  async createFavorite({ user_id, dish_id }) {
    await knex('favorites')
      .insert({ user_id, dish_id })
  }

  async deleteFavorite({ user_id, dish_id }) {
    await knex('favorites')
      .where({ user_id, dish_id })
      .delete();
  } 
}

module.exports = FavoritesRepository