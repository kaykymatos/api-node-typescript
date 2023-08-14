import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - GetById', () => {
  let cidadeId: number | undefined = undefined;
  let accessToken = '';
  beforeAll(async () => {
    

    const email = 'getbyid-pessoas@gmail.com';
    await testServer
      .post('/cadastrar')
      .send({ nome: 'teste', email, senha: '12345678' });
    const signinRes = await testServer
      .post('/entrar')
      .send({ email, senha: '12345678' });
    accessToken = signinRes.body.accessToken;

    const resCidade = await testServer
      .post('/cidades').set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Caxias do Sul' });
    cidadeId = resCidade.body;
  });
  it('Busca registro por id', async () => {
    const res1 = await testServer.post('/pessoas').set({ Authorization: `Bearer ${accessToken}` }).send({
      nomeCompleto: 'teste novo usuario',
      email: 'email@gmail.com',
      cidadeId,
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get(`/pessoas/${res1.body}`).set({ Authorization: `Bearer ${accessToken}` }).send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nomeCompleto');
  });
  it('Tenta buscar registro que não existe', async () => {
    const res1 = await testServer.get('/pessoas/99999').set({ Authorization: `Bearer ${accessToken}` }).send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});
