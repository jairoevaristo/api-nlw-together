import { Request, Response } from 'express';
import { ListTagServices } from '../services/ListTagServices';

class ListTagController {
  async handle(req: Request, res: Response) {
    const listTagServices = new ListTagServices();

    const tags = await listTagServices.execute();
    return res.status(200).json(tags);
  }
}

export { ListTagController };