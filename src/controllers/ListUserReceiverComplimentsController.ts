import { Request, Response } from 'express';
import {
  ListUserReceiverComplimentsServices 
} from '../services/ListUserReceiverComplimentsServices';

class ListUserReceiverComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const listUserReciverComplimentsService = new ListUserReceiverComplimentsServices();

    const compliments = await listUserReciverComplimentsService.execute(user_id);
    return res.status(200).json(compliments);
  }
}

export { ListUserReceiverComplimentsController };