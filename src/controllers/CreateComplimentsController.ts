import { Request, Response } from 'express';
import { ICreateComplimentsDTO } from '../dtos/CreateComplimentsDTO';
import { CreateComplimentsServices } from '../services/CreateComplimentsServices';

class CreateComplimentsController {
  async handle(req: Request, res: Response) {
    const {
      message,
      tag_id,
      user_receiver,
    }: ICreateComplimentsDTO = req.body;
    const { user_id } = req;

    const createComplimentsServices = new CreateComplimentsServices();

    const compliment = await createComplimentsServices.execute({
      message,
      tag_id,
      user_receiver,
      user_sender: user_id
    });

    res.status(201).json(compliment);
  }
}

export { CreateComplimentsController };