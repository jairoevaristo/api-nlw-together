import { Router } from 'express';
import { CreateComplimentsController } from '../controllers/CreateComplimentsController';
import { ensureAutheticated } from '../middlewares/ensureAutheticated';

const complimentRoutes = Router();
const createComplimentsController = new CreateComplimentsController();

complimentRoutes.post(
  '/', 
  ensureAutheticated,
  createComplimentsController.handle,
)

export { complimentRoutes };