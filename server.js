const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Enable CORS for all routes
server.use(cors());

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Use default router
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});