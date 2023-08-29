class DishesUpdateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({id, name, description, category, price, ingredients }) {
    if (!name || !description || !category || !price || !ingredients) {
      throw new AppError('Todos os campos são obrigatórios.', 400);
    }

    const dishToUpdate = await this.dishesRepository.getDishById(id);

    if (!dishToUpdate) {
      throw new AppError('Prato não encontrado.', 404);
    }

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