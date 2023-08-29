class DishesShowService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({ id }) {
    const dish = await this.dishesRepository.getDishById(id);

    if (!dish) {
      throw new AppError('Prato não encontrado.', 404);
    }

    const ingredients = await this.dishesRepository.getDishIngredients(id);

    const ingredientsNames = ingredients.map(ingredient => ingredient.name);

    return {
      ...dish,
      ingredients: ingredientsNames,
    };
  }
}

module.exports = DishesShowService;