const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('dp.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'PUT') {
    console.log('sou put');
  }
  res.json('ele é put')
  next();
});
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
