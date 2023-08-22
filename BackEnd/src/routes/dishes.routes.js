const { Router } = require("express");

const uploadConfig = require("../configs/upload");

const multer = require('multer');
const upload = multer(uploadConfig.MULTER);

const dishesRoutes = Router();

const DishesController = require("../controllers/DishesController");
const DishesImageController = require("../controllers/DishesImageController");

const dishesController = new DishesController();
const dishesImageController = new DishesImageController();

const authenticatedValidation = require("../middlewares/authenticatedValidation");
const adminValidation = require("../middlewares/adminValidation");

dishesRoutes.get("/:id", authenticatedValidation, dishesController.show);
dishesRoutes.get("/", authenticatedValidation, dishesController.index);

dishesRoutes.post(
  "/",
  authenticatedValidation,
  adminValidation,
  dishesController.create
);

dishesRoutes.patch(
  "/:id",
  authenticatedValidation,
  adminValidation,
  upload.single('image'),
  dishesImageController.update
)

dishesRoutes.put(
  "/:id",
  authenticatedValidation,
  adminValidation,
  dishesController.update
);

dishesRoutes.delete(
  "/:id",
  authenticatedValidation,
  adminValidation,
  dishesController.delete
);

module.exports = dishesRoutes;
