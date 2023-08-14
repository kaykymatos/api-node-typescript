import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';
import { number } from 'yup';

describe('Pessoas - GetAll', () => {
  let cidadeId: number | undefined = undefined;
  let accessToken = '';
  beforeAll(async () => {
   
    const email = 'getall-pessoas@gmail.com';
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
  it('Buscar todos os registros', async () => {
    const res1 = await testServer.post('/pessoas').set({ Authorization: `Bearer ${accessToken}` }).send({
      nomeCompleto: 'teste novo usuario',
      email: 'email@gmail.com',
      cidadeId,
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get('/pessoas').set({ Authorization: `Bearer ${accessToken}` }).send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});
