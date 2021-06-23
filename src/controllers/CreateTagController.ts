import { Request, Response } from 'express';
import { CreateTagServices } from '../services/CreateTagServices';

class CreateTagController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const createServiceTag = new CreateTagServices();

    const tag = await createServiceTag.execute(name);

    return res.status(201).json(tag);
  }
}

export { CreateTagController };