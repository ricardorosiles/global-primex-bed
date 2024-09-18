import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import './helpers/configEnvironment';
import { logger } from './helpers/logger';
import { router } from './router';
import './database';
import { errorHandler } from './middlewares/errorHandler';

const app: Express = express();
const port = process.env.PORT;

app.disable('x-powered-by');
app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key'],
  }),
);
app.use(express.json());
app.get('/', (_req: Request, res: Response) => {
  res.send(`Server ver: ${process.env.npm_package_version}`);
});

app.use(router);
app.use(errorHandler);

const server = app.listen(port, () => {
  logger.info(`server is running at port ${port}`);
});

export { server, app };
