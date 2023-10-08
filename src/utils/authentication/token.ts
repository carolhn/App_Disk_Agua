import { SignOptions, sign } from 'jsonwebtoken';
import { IToken } from '../../api/interfaces/Users/IAuth';
import AppError from '@utils/errors/AppError';
import { addHours, isAfter } from 'date-fns';

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

const isTokenExpired = (tokenCreatedAt: Date, hoursToExpire: number): boolean => {
  const compareDate = addHours(tokenCreatedAt, hoursToExpire);
  return isAfter(Date.now(), compareDate);
};

export { generateToken, isTokenExpired };