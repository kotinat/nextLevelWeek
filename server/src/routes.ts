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
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json(serializedItems);
});

export default routes;
