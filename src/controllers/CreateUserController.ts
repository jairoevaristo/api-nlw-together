import { Request, Response } from 'express';

import { ICreateUserDTO } from '../dtos/CreateUserDTO';
import { CreateUserServices } from '../services/CreateUserServices';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name, admin }: ICreateUserDTO = req.body;
    const createUserServices = new CreateUserServices();

    const user = await createUserServices.execute({
      email,
      name,
      admin
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };