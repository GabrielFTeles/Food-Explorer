class FoodsShowService {
  constructor(foodsRepository) {
    this.foodsRepository = foodsRepository;
  }

  async execute({ id }) {
    const food = await this.foodsRepository.getFoodById(id);
    const ingredients = await this.foodsRepository.getFoodIngredients(id);

    const ingredientsNames = ingredients.map(ingredient => ingredient.name);

    return {
      ...food,
      ingredients: ingredientsNames,
    };
  }
}

module.exports = FoodsShowService;