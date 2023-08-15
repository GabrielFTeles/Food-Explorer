class DishesUpdateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({id, name, description, category, price, image, ingredients }) {
    const updatedDish_id = await this.dishesRepository
      .updateDish({id, name, description, category, price, image });

    const ingredientsWithDishId = ingredients.map(ingredient => ({
      name: ingredient,
      dish_id: updatedDish_id,
    }));

    await this.dishesRepository.updateIngredients(updatedDish_id, ingredientsWithDishId);

    return updatedDish_id;
  }
}

module.exports = DishesUpdateService;