const knex = require('../database/knex');

class FoodsRepository {
  async getUserById(id) {
    const [user] = await knex('users').where({ id });

    return user;
  }

  async getFoodById(id) {
    const [food] = await knex('foods').where({ id });

    return food;
  }

  async getFoodIngredients(food_id) {
    const ingredients = await knex('ingredients').where({ food_id });

    return ingredients;
  }

  async getFoodByName(name) {
    const [food] = await knex('foods').where({ name });

    return food;
  }

  async createFood({ name, description, category, image, price}) {
    const [foodCreated] = await knex('foods')
      .insert({ name, description, category, image, price });

    return foodCreated;
  }

  async createIngredients(ingredients) {
    await knex('ingredients').insert(ingredients);
  }
}

module.exports = FoodsRepository;