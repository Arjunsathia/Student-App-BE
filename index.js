const jsonServer = require("json-server");

const server = jsonServer.create();

server.use(jsonServer.defaults());
server.use(jsonServer.router("db.json"));

const PORT = 3000;

server.listen(PORT, () => {
  console.log("server running at", PORT);
});
