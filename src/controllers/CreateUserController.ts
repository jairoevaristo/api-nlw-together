import { Request, Response } from 'express';

import { ICreateUserDTO } from '../dtos/CreateUserDTO';
import { CreateUserServices } from '../services/CreateUserServices';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name, admin }: ICreateUserDTO = req.body;
    const createUserServices = new CreateUserServices();

    try {
      const user = await createUserServices.execute({
        email,
        name,
        admin
      });
      return res.status(201).json(user);
    } catch(err) {
      console.log(err.message);
      return res.status(400).json({ message: err.message });
    }
    
  }
}

export { CreateUserController };