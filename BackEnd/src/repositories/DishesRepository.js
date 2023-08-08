const knex = require('../database/knex');

class DishesRepository {
  async getAllDishes(title) {
    const dishes = await knex('dishes').whereLike('name', `%${title}%`);

    return dishes;
  }

  async getAllIngredients() {
    const ingredients = await knex('ingredients');

    return ingredients;
  }

  async getDishById(id) {
    const [dish] = await knex('dishes').where({ id });

    return dish;
  }

  async getDishIngredients(dish_id) {
    const ingredients = await knex('ingredients').where({ dish_id });

    return ingredients;
  }

  async getDishByName(name) {
    const [dish] = await knex('dishes').where({ name });

    return dish;
  }

  async createDish({ name, description, category, image, price}) {
    const [dishCreated] = await knex('dishes')
      .insert({ name, description, category, image, price });

    return dishCreated;
  }

  async createIngredients(ingredients) {
    await knex('ingredients').insert(ingredients);
  }

  async updateDish({id, name, description, category, image, price }) {
    const updatedDish = await knex('dishes')
      .where({ id })
      .update({ name, description, category, image, price });

    return updatedDish;
  }

  async updateIngredients(dish_id, ingredients) {
    await knex('ingredients').where({ dish_id }).delete();

    this.createIngredients(ingredients);
  }

  async deleteDish(id) {
    await knex('dishes').where({ id }).delete();
  }
}

module.exports = DishesRepository;