const DishesRepository = require("../repositories/DishesRepository");
const DishesImageUpdateService = require('../services/DishesImageUpdateService');

class DishesImageController {
  async update(request, response) {
    const { id } = request.params;
    const { filename } = request.file;

    const dishesRepository = new DishesRepository();
    const dishesImageUpdateService = new DishesImageUpdateService(dishesRepository);

    const dish = await dishesImageUpdateService.execute({ id, filename });

    return response.json(dish);
  }
}

module.exports = DishesImageController;