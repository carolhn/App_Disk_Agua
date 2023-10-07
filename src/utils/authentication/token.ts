import { SignOptions, sign } from 'jsonwebtoken';
import { IToken } from '../../api/interfaces/IAuth';
import AppError from '@utils/errors/AppError';

const TOKEN_SECRET = 'd3aa349c8d932ea71f11aa096ba29f61';

const configToken: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload: IToken): string => {
  try {
    const token = sign(payload, TOKEN_SECRET, configToken);
    return token;
  } catch (error) {
    throw new AppError('Erro ao gerar o token', 500);
  }
};

export { generateToken };