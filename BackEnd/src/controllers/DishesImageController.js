const DishesRepository = require("../repositories/DishesRepository");
const DishesImageUpdateService = require('../services/DishesImageUpdateService');

class DishesImageController {
  async update(request, response) {
    const { id } = request.params;
    const dishImageName = request.file.filename;

    const dishesRepository = new DishesRepository();
    const dishesImageUpdateService = new DishesImageUpdateService(dishesRepository);

    const dish = await dishesImageUpdateService.execute({ id, dishImageName });

    return response.json(dish);
  }
}

module.exports = DishesImageController;