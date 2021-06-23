import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';

const tagRoutes = Router();
const createTagController = new CreateTagController();

tagRoutes.post('/', createTagController.handle);

export { tagRoutes };
