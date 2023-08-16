class DishesUpdateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({id, name, description, category, price, ingredients }) {
    const dishToUpdate = await this.dishesRepository.getDishById(id);

    const updatedDish = Object.assign(dishToUpdate, {
      name,
      description,
      category,
      price,
    });

    await this.dishesRepository.updateDish(updatedDish);

    const ingredientsWithDishId = ingredients.map(ingredient => ({
      name: ingredient,
      dish_id: id,
    }));

    await this.dishesRepository.updateIngredients(id, ingredientsWithDishId);
  }
}

module.exports = DishesUpdateService;