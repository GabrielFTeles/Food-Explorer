const { Router } = require("express");

const uploadConfig = require("../configs/upload");

const multer = require('multer');
const upload = multer(uploadConfig.MULTER);

const dishesRoutes = Router();

const DishesController = require("../controllers/DishesController");
const DishesImageController = require("../controllers/DishesImageController");

const dishesController = new DishesController();
const dishesImageController = new DishesImageController();

const authenticationMiddleware = require("../middlewares/authenticationMiddleware");
const adminAuthorizationMiddleware = require("../middlewares/adminAuthorizationMiddleware");

dishesRoutes.get("/:id", authenticationMiddleware, dishesController.show);
dishesRoutes.get("/", authenticationMiddleware, dishesController.index);

dishesRoutes.post(
  "/",
  authenticationMiddleware,
  adminAuthorizationMiddleware,
  dishesController.create
);

dishesRoutes.patch(
  "/:id",
  authenticationMiddleware,
  adminAuthorizationMiddleware,
  upload.single('image'),
  dishesImageController.update
)

dishesRoutes.put(
  "/:id",
  authenticationMiddleware,
  adminAuthorizationMiddleware,
  dishesController.update
);

dishesRoutes.delete(
  "/:id",
  authenticationMiddleware,
  adminAuthorizationMiddleware,
  dishesController.delete
);

module.exports = dishesRoutes;
