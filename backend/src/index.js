const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
/* {origin: 'https/meuapp.com.br'} */

app.use(express.json());

app.use(routes);

app.listen(3333);

/**
 * GET: Buscar/listar
 * POST: Criar 
 * PUT: Alterar
 * DELETE: Deletar
 */

/**
 * Parâmetros
 * 
 * Query Params: nomeados enviados na rota apos ? (filtro, paginação)
 * ex: /users | /users?name=Pedro | req.query 
 * Route Params: utilizado para identificar recursos 
 * ex: /users/:id | /users/1 | 
 * Request Body: corpo da requisição, alterar ou criar recursos
 */
