const DiskStorage = require('../providers/DiskStorage');
const AppError = require('../utils/AppError');

class DishesImageUpdateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({ id, dishImage }) {
    const diskStorage = new DiskStorage();

    const dish = await this.dishesRepository.getDishById(id);

    if (!dish) throw new AppError('Dish not found', 404);

    if (dish.image !== 'default.jpg') await diskStorage.deleteFile(dish.image);

    const filename = await diskStorage.saveFile(dishImage);

    dish.image = filename;

    await this.dishesRepository.updateDish(dish);

    return dish;
  }
}

module.exports = DishesImageUpdateService;