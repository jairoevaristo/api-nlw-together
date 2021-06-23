import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const tagRoutes = Router();
const createTagController = new CreateTagController();

tagRoutes.post('/', ensureAdmin, createTagController.handle);

export { tagRoutes };
