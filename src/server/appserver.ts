import express from 'express';
import './shared/services/translationsYup';
import { router } from './routes';
import 'dotenv/config';
import cors from 'cors';

const server = express();

server.use(
  cors({
    origin: process.env.ENABLED_CORS?.split(';')||[],
  })
);
server.use(express.json());
server.use(router);

export { server };
