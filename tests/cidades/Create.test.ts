import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {
  let accessToken = '';
  beforeAll(async () => {
    const email = 'create-cidades@gmail.com';
    await testServer
      .post('/cadastrar')
      .send({ nome: 'teste', email, senha: '12345678' });
    const signinRes = await testServer
      .post('/entrar')
      .send({ email, senha: '12345678' });
    accessToken = signinRes.body.accessToken;
  });
  it('Tenta criar uma cidade sem estar autenticado', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias do Sul' });

    expect(res1.statusCode).toEqual(StatusCodes.UNAUTHORIZED);    
    expect(res1.body).toHaveProperty('errors.default');

  });
  it('Cria registro', async () => {
    const res1 = await testServer
      .post('/cidades')
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Caxias do Sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Tenta criar um registro com nome muito curto', async () => {
    const res1 = await testServer
      .post('/cidades')
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Ca' });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
});
