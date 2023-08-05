import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - Create', () => {
  it('Cria registro', async () => {
    const res1 = await testServer.post('/pessoas').send({
      nomeCompleto: 'teste novo usuario',
      email: 'email@gmail.com',
      cidadeId: 1,
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Tenta criar um registro com nome muito curto', async () => {
    const res1 = await testServer.post('/pessoas').send({
      nomeCompleto: 'a',
      email: 'email@gmail.com',
      cidadeId: 1,
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nomeCompleto');
  });
  it('Tenta criar um registro com email formato inválido', async () => {
    const res1 = await testServer.post('/pessoas').send({
      nomeCompleto: 'aaaaa',
      email: 'emailgmail.com',
      cidadeId: 1,
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.email');
  });

  it('Tenta criar um registro com id da cidade inválido', async () => {
    const res1 = await testServer.post('/pessoas').send({
      nomeCompleto: 'aaaaa',
      email: 'email@gmail.com',
      cidadeId: 0,
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.cidadeId');
  });
});
