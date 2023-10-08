import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@utils/errors/AppError';

const TOKEN_SECRET = 'd3aa349c8d932ea71f11aa096ba29f61';

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError('Token não existe!', 401);
  }

  const [, token] = authorization.split(' ');

  try {
    verify(token, TOKEN_SECRET);
    return next();
  } catch (error) {
    throw new AppError('Token inválido!', 401);
  }
}
