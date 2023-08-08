class DishesShowService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({ id }) {
    const dish = await this.dishesRepository.getDishById(id);
    const ingredients = await this.dishesRepository.getDishIngredients(id);

    const ingredientsNames = ingredients.map(ingredient => ingredient.name);

    return {
      ...dish,
      ingredients: ingredientsNames,
    };
  }
}

module.exports = DishesShowService;