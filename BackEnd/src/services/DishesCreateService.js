const AppError = require('../utils/AppError');

class DishesCreateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({ name, description, category, price, image, ingredients }) {
    const dishAlreadyExists = await this.dishesRepository.getDishByName(name);

    if (dishAlreadyExists) {
      throw new AppError(`${name} já existe, insira outro nome.`);
    }

    const dishCreated_id = await this.dishesRepository.createDish({ name, description, category, price, image});

    const ingredientsWithDishId = ingredients.map(ingredient => ({
      name: ingredient,
      dish_id: dishCreated_id,
    }));

    await this.dishesRepository.createIngredients(ingredientsWithDishId);

    return dishCreated_id;
  }
}

module.exports = DishesCreateService;