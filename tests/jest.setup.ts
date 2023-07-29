import supertest from 'supertest';
import { server } from '../src/server/appserver';

export const testServer = supertest(server);
