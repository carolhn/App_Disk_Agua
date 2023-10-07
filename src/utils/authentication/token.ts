import { SignOptions, sign, verify} from 'jsonwebtoken';
import { IToken } from '../../api/interfaces/IAuth';

const TOKEN_SECRET = 'd3aa349c8d932ea71f11aa096ba29f61'

const configToken: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256'
}

const generateToken = (payload: IToken) => {
    try {
      const token = sign(payload, TOKEN_SECRET, configToken);
      return token;
    } catch (error) {
      throw new Error('Token nao gerado!');
    }
};

const verifyToken = (token: string) => {
    if(!token) {
        throw new Error('Token nao existe!');
    }
    try {
        const validateJwt = verify(token, TOKEN_SECRET);
        console.log('aqui é o validate token-----------', validateJwt);
        return validateJwt;
    } catch (error) {
      throw new Error('Token invalido!');
    }
}

export { generateToken, verifyToken };