import express from "express";
import cors from 'cors';
import routes from "./routes";
import path from 'path';

const app = express();

// utilizado para adicionar um domínio, futuramente
// permitem que todas as URL's acessem quando 
// deixamos em branco
app.use(cors());

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, "..", "uploads")))

app.listen(3333);
