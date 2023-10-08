import Sinon from "sinon";
import { IUser } from "../../src/api/interfaces/Users/IUsers";
import { expect } from "chai";
import UserService from '../../src/api/services/Users/UserService';
import Users from "../../src/database/models/Users";
import { userMock } from "../mock/users.mock";
import sinon from "sinon";

describe('Teste de Serviço: Admin', function () {
    afterEach(function () {
        Sinon.restore();
    })

    it('Teste 1: Deve retornar um usuario pelo email', async function () {
      const inputMock = {
        email: 'biscoito@disk.com',
      };

      const outputMock: IUser = {
        id: 2,
        name: 'Biscoito Azul',
        email: 'biscoito@disk.com',
        password: 'biscoito12',
        role: 'employee',
      };

      const userGet = {
        get: () => outputMock,
      }

      const userService = new UserService();
      Sinon.stub(Users, 'findOne').resolves(userGet as never);
      const result = await userService.findByEmail(inputMock as never);
      expect(result).to.be.deep.equal(outputMock);
    });

    it('Teste 2: Deve criar um novo usuario', async function () {
      const inputMock = {
        name: 'Queijo Frito',
        email: 'queijo@frito.com',
        password: 'quejo!frito10A',
        role: 'employee',
      };

      const userService = new UserService()
      Sinon.stub(Users, 'create').resolves({ dataValues: inputMock } as any);
      const result = await userService.createUser(inputMock as never);
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

      const userService = new UserService()
      Sinon.stub(Users, 'create').rejects(new Error('Usuário já existe no banco de dados'));
      const result = await userService.createUser(inputMock as never);
      expect(result.type).to.be.equal(409);
      expect(result.message).to.be.equal('Usuário já existe no banco de dados');
    });

    it('Teste 4: Deve gerar um status 500 com uma message', async function () {
      const inputMock = {
        name: 'Biscoito Azul',
        email: '',
      };

      const userService = new UserService()
      Sinon.stub(Users, 'create').rejects(new Error('Erro interno do servidor'));
      const result = await userService.createUser(inputMock as never);
      expect(result.type).to.be.equal(500);
      expect(result.message).to.be.equal('Erro interno do servidor');
    });

    it('Teste 5: Deve retornar uma lista de usuarios', async function () {
      const findAllStub = sinon.stub(Users, 'findAll').resolves(userMock.users as any);

        const userService = new UserService();
        const result = await userService.findAll();

        expect(findAllStub.calledOnce).to.be.true;
        expect(result).to.deep.equal(userMock.users);
    });
});
