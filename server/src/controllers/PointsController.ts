import knex from "../database/connection";
import { Request, Response } from "express";

class PointsController {
  async index(request: Request, response: Response) {
    // cidade, uf, items (query params), para filtros
    const { city, uf, items } = request.query;

    // items parseados, tirando espaço em branco e transformando num array
    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*"); // apenas todos os dados da tabela points

      const serializedPoints = points.map((point) => {
        return {
          ...point,
          image_url: `http://192.168.1.38:3333/uploads/${point.image}`,
        };
      });

    return response.json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    // pegando o id que vem nos parâmetros da requisição
    // const id = request.params.id; vamos de destructuring
    const { id } = request.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return response.status(400).json({ message: "Point not found." });
    }

    const serializedPoint = {
        ...point,
        image_url: `http://192.168.1.38:3333/uploads/${point.image}`,
      };

    /* SELECT title FROM items 
      JOIN point_items ON items.id = point_items.item_id
      WHERE point_items.point_id = {id}
    */

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    return response.json({ point: serializedPoint, items });
  }

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
      // alterando imagem, p arquivo enviado
      image: request.file.filename,
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

    // alterando inserção de ponto, pois agora os itens vem como x,y,z
    const pointItems = items
    .split(',')
    .map((item: string) => Number(item.trim()))
    .map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx("point_items").insert(pointItems);

    await trx.commit();
    
    // retornando o objeto criado, ao invés de uma msg de sucesso
    return response.json({
      id: point_id,
      ...point,
    });
  }
}

export default PointsController;
