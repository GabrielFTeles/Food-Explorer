const AppError = require('../utils/AppError');

class FoodsCreateService {
  constructor(foodsRepository) {
    this.foodsRepository = foodsRepository;
  }

  async execute({ name, description, category, image, price, ingredients }) {
    const foodAlreadyExists = await this.foodsRepository.getFoodByName(name);

    if (foodAlreadyExists) {
      throw new AppError(`${name} already exists, please insert other name.`);
    }

    const foodCreated_id = await this.foodsRepository.createFood({ name, description, category, image, price });

    const ingredientsWithFoodId = ingredients.map(ingredient => ({
      name: ingredient,
      food_id: foodCreated_id,
    }));

    await this.foodsRepository.createIngredients(ingredientsWithFoodId);

    return foodCreated_id;
  }
}

module.exports = FoodsCreateService;