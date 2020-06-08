import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// listar todos os itens
routes.get("/items", itemsController.index);

// criar ponto de coleta
routes.post("/points", pointsController.create);

export default routes;
