import express from "express";
//ts precisa das definições de tipos da bilbioteca, por isso os ... no import

const app = express();

app.get("/users", (request, response) => {
  // request pra obter dados da requisição, como dados do usuário
  console.log("iha");

  //response.send('Hello world');
  // precisamos lembrar que ele sempre vai retornar JSON
  response.json(["Diego", "Cleiton", "Robson"]);
});

app.listen(3333);
