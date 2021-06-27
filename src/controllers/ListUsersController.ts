import { Request, Response } from 'express';
import { ListUsersServices } from '../services/ListUsersServices';

class ListUserController {
  async handle(req: Request, res: Response) {
    const listUsersServices = new ListUsersServices();
    const users = await listUsersServices.execute();

    return res.status(200).json(users);
  }
}

export { ListUserController };