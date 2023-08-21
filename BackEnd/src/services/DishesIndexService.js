class DishesIndexService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute(searchText = "") {
    const dishes = await this.dishesRepository.getAllDishes(searchText);
    const ingredients = await this.dishesRepository.getAllIngredients();

    const dishesWithIngredients = dishes.map(dish => {
      const dishIngredients = ingredients
        .filter(ingredient => ingredient.dish_id === dish.id)
        .map(ingredient => ingredient.name);

      return {
        ...dish,
        ingredients: dishIngredients
      }
    });

    return dishesWithIngredients;
  }
}

module.exports = DishesIndexService;