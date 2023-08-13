import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', () => {
  let accessToken = '';
  beforeAll(async () => {
    const email = 'getall-cidades@gmail.com';
    await testServer
      .post('/cadastrar')
      .send({ nome: 'teste', email, senha: '12345678' });
    const signinRes = await testServer
      .post('/entrar')
      .send({ email, senha: '12345678' });
    accessToken = signinRes.body.accessToken;
  });
  it('Tenta apagar a cidade sem autorização', async () => {
    const res1 = await testServer
      .post('/cidades')
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get('/cidades').send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(resBuscada.body).toHaveProperty('errors.default');
  });
  it('Buscar todos os registros', async () => {
    const res1 = await testServer
      .post('/cidades')
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get('/cidades').set({ Authorization: `Bearer ${accessToken}` }).send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});