import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - GetById', () => {
  let accessToken = '';
  beforeAll(async () => {
    const email = 'getbyid-cidades@gmail.com';
    await testServer
      .post('/cadastrar')
      .send({ nome: 'teste', email, senha: '12345678' });
    const signinRes = await testServer
      .post('/entrar')
      .send({ email, senha: '12345678' });
    accessToken = signinRes.body.accessToken;
  });
  it('Tenta buscar cidade pelo id sem autorização', async () => {
    const res1 = await testServer
      .post('/cidades')
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get(`/cidades/${res1.body}`).send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(resBuscada.body).toHaveProperty('errors.default');
  });


  it('Busca registro por id', async () => {
    const res1 = await testServer
      .post('/cidades')
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get(`/cidades/${res1.body}`).set({ Authorization: `Bearer ${accessToken}` }).send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });
  it('Tenta buscar registro que não existe', async () => {
    const res1 = await testServer.get('/cidades/99999').set({ Authorization: `Bearer ${accessToken}` }).send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});
