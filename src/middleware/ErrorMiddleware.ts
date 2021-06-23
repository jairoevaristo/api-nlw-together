import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export function handleError(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof AppError) {
    return res.status(error.status).json({ error: error.message })
  }

  return res.status(500).json({
    status: 'error', 
    error: 'Internal Server Error'
  })
}