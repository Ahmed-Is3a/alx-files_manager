import express from 'express';
import injectRoutes from './routes';

const server = express();

server.use(express.json({ limit: '200mb' }));

injectRoutes(server);

const port = process.env.PORT || 5000;
const env = process.env.npm_lifecycle_event || 'dev';
server.listen(port, () => {
  console.log(`[${env}] API has started listening at port:${port}`);
});

export default server;
