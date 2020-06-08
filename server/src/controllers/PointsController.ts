import knex from "../database/connection";
// não sabemos o formato de request e response!
// typescript!
import { Request, Response } from "express";

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const trx = await knex.transaction();

    // criando variável para o ponto de coleta criado
    const point = {
      image: "image-fake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const insertedIds = await trx("points").insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx("point_items").insert(pointItems);

    // retornando o objeto criado, ao invés de uma msg de sucesso
    return response.json({
      id: point_id,
      ...point,
    });
  }
}

export default PointsController;
