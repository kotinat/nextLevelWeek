import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// listar todos os itens
routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

// criar ponto de coleta
// routes.post("/points", pointsController.create);
// a rota que precisa do multer, do upload, é a rota post!
routes.post("/points", upload.single("image"), pointsController.create);
// precisamos alterar o JSON pois ele não suporta envio de arquivos

export default routes;
