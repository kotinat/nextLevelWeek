import { Request, Response } from "express";
import knex from "../database/connection";

// por que index?
// é um padrão da comunidade utilizar os métodos de controller
// index, show, create/store, update, delete/destroy
class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });
    return response.json(serializedItems);
  }
}

export default ItemsController;
