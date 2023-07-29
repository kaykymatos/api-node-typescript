import knex from 'knex';
import { development, production, test } from './enviroment';

const getEnviroment = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return production;
    case 'development':
      return development;
    case 'test':
      return test;
    default:
      return development;
  }
};
export const Knex = knex(getEnviroment());
