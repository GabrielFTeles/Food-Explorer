const FoodsRepository = require("../repositories/FoodsRepository");
const FoodsCreateService = require("../services/FoodsCreateService");
const FoodsShowService = require("../services/FoodsShowService");

class FoodsController {
  async create(request, response) {
    const { name, description, category, image, price, ingredients } = request.body;

    const foodsRepository = new FoodsRepository();
    const foodsCreateService = new FoodsCreateService(foodsRepository);

    await foodsCreateService.execute({ name, description, category, price, image, ingredients });

    return response.status(201).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const foodsRepository = new FoodsRepository();
    const foodsShowService = new FoodsShowService(foodsRepository);

    const food = await foodsShowService.execute({ id });

    return response.json(food);
  }
}

module.exports = FoodsController;
