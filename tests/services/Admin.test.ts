import Sinon from "sinon";
import { IAdmin } from "../../src/api/interfaces/IAdmin";
import { expect } from "chai";
import { getUserByEmail, registerNewUser } from '../../src/api/services/AdminService';
import Users from "../../src/database/models/Users";

describe('Teste de Serviço: Admin', function () {
    afterEach(function () {
        Sinon.restore();
    })

    it('Teste 1: Deve retornar um usuario pelo email', async function () {
      const inputMock = {
        email: 'biscoito@disk.com',
      };

      const outputMock: IAdmin = {
        id: 2,
        name: 'Biscoito Azul',
        email: 'biscoito@disk.com',
        password: 'biscoito12',
        role: 'employee',
      };

      const userGet = {
        get: () => outputMock,
      }

      Sinon.stub(Users, 'findOne').resolves(userGet as never);
      const result = await getUserByEmail(inputMock as never);
      expect(result).to.be.deep.equal(outputMock);
    });

    it('Teste 2: Deve criar um novo usuario', async function () {
        const inputMock = {
            name: 'Queijo Frito',
            email: 'queijo@frito.com',
            password: 'quejo!frito10A',
            role: 'employee',
        };

        Sinon.stub(Users, 'create').resolves({ dataValues: inputMock } as any);
        const result = await registerNewUser(inputMock as never);

        expect(result.type).to.be.equal(201);
        expect(result.message).to.be.equal('Usuário criado');
    });

   it('Teste 3: Deve gerar um status 409 com uma message', async function () {
        const inputMock = {
            name: 'Biscoito Azul',
            email: 'biscoito@disk.com',
            password: 'biscoito12',
            role: 'employee',
        };

        Sinon.stub(Users, 'create').rejects(new Error('Usuário já existe no banco de dados'));
        const result = await registerNewUser(inputMock as never);

        expect(result.type).to.be.equal(409);
        expect(result.message).to.be.equal('Usuário já existe no banco de dados');
    });

  it('Teste 4: Deve gerar um status 500 com uma message', async function () {
        const inputMock = {
            name: 'Biscoito Azul',
            email: '',
        };

        Sinon.stub(Users, 'create').rejects(new Error('Erro interno do servidor'));
        const result = await registerNewUser(inputMock as never);

        expect(result.type).to.be.equal(500);
        expect(result.message).to.be.equal('Erro interno do servidor');
    });
});
