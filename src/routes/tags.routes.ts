import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { ListTagController } from '../controllers/ListTagController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAutheticated } from '../middlewares/ensureAutheticated';

const tagRoutes = Router();
const createTagController = new CreateTagController();
const listTagController = new ListTagController();

tagRoutes.post(
  '/', 
  ensureAutheticated,
  ensureAdmin,
  createTagController.handle
);

tagRoutes.get('/', listTagController.handle);

export { tagRoutes };
