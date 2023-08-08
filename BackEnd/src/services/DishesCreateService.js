const AppError = require('../utils/AppError');

class DishesCreateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({ name, description, category, image, price, ingredients }) {
    const dishAlreadyExists = await this.dishesRepository.getDishByName(name);

    if (dishAlreadyExists) {
      throw new AppError(`${name} already exists, please insert other name.`);
    }

    const dishCreated_id = await this.dishesRepository.createDish({ name, description, category, image, price });

    const ingredientsWithDishId = ingredients.map(ingredient => ({
      name: ingredient,
      dish_id: dishCreated_id,
    }));

    await this.dishesRepository.createIngredients(ingredientsWithDishId);

    return dishCreated_id;
  }
}

module.exports = DishesCreateService;