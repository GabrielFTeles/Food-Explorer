const DiskStorage = require('../providers/DiskStorage');
const AppError = require('../utils/AppError');
const { diskStorage } = require('multer');

class DishesDeleteService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({ id }) {
    const diskStorage = new DiskStorage();

    const dish = await this.dishesRepository.getDishById(id);

    if (!dish) throw new AppError('Dish not found', 404);

    if (dish.image !== 'default.jpg') await diskStorage.deleteFile(dish.image);

    await this.dishesRepository.deleteDish(id);
  }
}

module.exports = DishesDeleteService;