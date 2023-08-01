import knex from 'knex';
import { server } from './server/appserver';
import { Knex } from './server/database/knex';

const startServer = () => {
  server.listen(process.env.PORT || 3333, () => {
    console.log(
      `App rodando porta ${process.env.PORT || 3333} \nurl:http://localhost:${
        process.env.PORT || 3333
      }`
    );
  });
};

if (process.env.IS_LOCALHOST !== 'true') {
  Knex.migrate
    .latest()
    .then(() => {
      Knex.seed
        .run()
        .then(() => {
          startServer();
        })
        .catch(console.log);
      startServer();
    })
    .catch(console.log);
} else {
  startServer();
}
