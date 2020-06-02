import express, { response } from "express";

const app = express();

// o express não entende json, precisamos passar essa info pra ele
app.use(express.json());

const users = ["Diego", "Cleiton", "Robson", "Daniel"];

app.get("/users", (request, response) => {
  // console.log("Listagem de usuários");
  //response.json(users);

  // usando query param
  const search = String(request.query.search);

  // é opcional, então faremos um if
  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  return response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
  console.log("Buscando por id");
  const id = Number(request.params.id);

  const user = users[id];

  response.json(user);
});

app.post("/users", (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email,
  };

  return response.json(user);
});

// app.post("/users", (request, response) => {
//   const user = {
//     name: "Diego",
//     email: "diego@rocketseat.com.br",
//   };

// return para devolver a resposta e não continuar executando após isso
//   return response.json(user);
// });

app.listen(3333);
