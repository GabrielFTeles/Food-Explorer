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
    const { name, description, category, image, price, ingredients } = request.body;

    const dishesRepository = new DishesRepository();
    const dishesCreateService = new DishesCreateService(dishesRepository);

    await dishesCreateService.execute({ name, description, category, price, image, ingredients });

    return response.status(201).json();
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, category, image, price, ingredients } = request.body;

    const dishesRepository = new DishesRepository();
    const dishesUpdateService = new DishesUpdateService(dishesRepository);

    await dishesUpdateService.execute({ id, name, description, category, image, price, ingredients });

    return response.json();
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
