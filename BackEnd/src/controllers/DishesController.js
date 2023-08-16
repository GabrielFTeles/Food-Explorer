const DishesRepository = require("../repositories/DishesRepository");
const DishesCreateService = require("../services/DishesCreateService");
const DishesShowService = require("../services/DishesShowService");
const DishesDeleteService = require("../services/DishesDeleteService");
const DishesIndexService = require("../services/DishesIndexService");
const DishesUpdateService = require("../services/DishesUpdateService");

class DishesController {
  async index(request, response) {
    const { title } = request.query;

    const dishesRepository = new DishesRepository();
    const dishesIndexService = new DishesIndexService(dishesRepository);

    const dishes = await dishesIndexService.execute(title);

    return response.json(dishes);
  }

  async show(request, response) {
    const { id } = request.params;

    const dishesRepository = new DishesRepository();
    const dishesShowService = new DishesShowService(dishesRepository);

    const dish = await dishesShowService.execute({ id });

    return response.json(dish);
  }

  async create(request, response) {
    const { name, description, category, price, ingredients } = request.body;
    const image = "default.jpg"

    const dishesRepository = new DishesRepository();
    const dishesCreateService = new DishesCreateService(dishesRepository);

    const dish_id = await dishesCreateService.execute({ name, description, category, price, image, ingredients });

    return response.status(201).json({
      message: "Dish created successfully",
      dish_id,
    });
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, category, price, ingredients } = request.body;

    const dishesRepository = new DishesRepository();
    const dishesUpdateService = new DishesUpdateService(dishesRepository);

    await dishesUpdateService.execute({ id, name, description, category, price, ingredients });

    return response.json({
      message: "Dish updated successfully",
      id: +id,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    const dishesRepository = new DishesRepository();
    const dishesDeleteService = new DishesDeleteService(dishesRepository);

    dishesDeleteService.execute({ id });

    return response.json();
  }
}

module.exports = DishesController;
