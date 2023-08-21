const { Router } = require("express");

const uploadConfig = require("../configs/upload");

const multer = require('multer');
const upload = multer(uploadConfig.MULTER);

const dishesRoutes = Router();

const DishesController = require("../controllers/DishesController");
const DishesImageController = require("../controllers/DishesImageController");

const dishesController = new DishesController();
const dishesImageController = new DishesImageController();

const authenticationValidation = require("../middlewares/authenticationValidation");
const adminAuthorizationValidation = require("../middlewares/adminAuthorizationValidation");

dishesRoutes.get("/:id", authenticationValidation, dishesController.show);
dishesRoutes.get("/", authenticationValidation, dishesController.index);

dishesRoutes.post(
  "/",
  authenticationValidation,
  adminAuthorizationValidation,
  dishesController.create
);

dishesRoutes.patch(
  "/:id",
  authenticationValidation,
  adminAuthorizationValidation,
  upload.single('image'),
  dishesImageController.update
)

dishesRoutes.put(
  "/:id",
  authenticationValidation,
  adminAuthorizationValidation,
  dishesController.update
);

dishesRoutes.delete(
  "/:id",
  authenticationValidation,
  adminAuthorizationValidation,
  dishesController.delete
);

module.exports = dishesRoutes;
