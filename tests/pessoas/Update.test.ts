import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Pessoas - UpdateById', () => {
  it('Atualiza registro', async () => {
    const res1 = await testServer
      .post('/pessoas')
      .send({
        nomeCompleto: 'teste novo usuario',
        email: 'email@gmail.com',
        cidadeId: 1,
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/pessoas/${res1.body}`)
      .send({
        nomeCompleto: 'teste novo usuario',
        email: 'novoemail@gmail.com',
        cidadeId: 1,
      });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Tenta atualizar registro que não existe', async () => {
    const res1 = await testServer
      .put('/pessoas/99999')
      .send({
        nomeCompleto: 'teste novo usuario',
        email: 'emailnovo@gmail.com',
        cidadeId: 1,
      });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('error.default');
  });
});
