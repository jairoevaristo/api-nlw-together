import { Request, Response } from 'express';

import { IAutheticatedUserDTO } from '../dtos/AutheticatedUserDTO';
import { AutheticatedUserServices } from '../services/AuthenticatedUserServices';

class AutheticatedUserController {
  async handle(req: Request, res: Response) {
    const { email, password }: IAutheticatedUserDTO = req.body;
    const autheticatedUserService = new AutheticatedUserServices();

    const token = await autheticatedUserService.execute({
      email,
      password
    });

    res.status(201).json({ token });
  }
}

export { AutheticatedUserController };