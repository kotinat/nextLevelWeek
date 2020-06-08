import express from "express";
import knex from "./database/connection";

const routes = express.Router();

// listar todos os itens
routes.get("/items", async (request, response) => {
  // query select
  // depois, checar melhor como fazer query's no knex
  // precisamos do await, para que ele aguarde a query
  // para continuar
  const items = await knex("items").select("*");

  // transformar informações para um novo formato, para o
  // frnt, por exemplo
  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json(serializedItems);
});

// criando nosso cadastro do ponto de coleta
routes.post("/points", async (request, response) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items, // itens que seleciona embaixo
  } = request.body;

  await knex("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  return response.json({ sucess: true });
});

export default routes;
