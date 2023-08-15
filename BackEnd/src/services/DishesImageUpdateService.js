const AppError = require('../utils/AppError')

class DishesImageUpdateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({ id, filename }) {
    const dish = await this.dishesRepository.getDishById(id);

    if (!dish) {
      throw new AppError('Dish not found', 404);
    }

    dish.image = filename;

    await this.dishesRepository.updateDish(dish);

    return dish;
  }
}

module.exports = DishesImageUpdateService;