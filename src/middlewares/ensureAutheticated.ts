import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
import { verify } from 'jsonwebtoken';

interface IPlayload {
  sub: string;
}

export function ensureAutheticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError({
      message: 'Token not provider',
      status: 401
    })
  }

  const [, token] = authorization.split(' ');

  try {
    const { sub } = verify(token, "7rhs34ue0y4795bcsxcnztw48r2") as IPlayload;
    req.user_id = sub;
  } catch (err) {
    throw new AppError({
      message: 'User unauthorized',
      status: 401
    })
  }

  return next();

}