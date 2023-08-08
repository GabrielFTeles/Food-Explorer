class DishesDeleteService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async execute({ id }) {
    await this.dishesRepository.deleteDish(id);
  }
}

module.exports = DishesDeleteService;