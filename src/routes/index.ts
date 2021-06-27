import { Router } from 'express';

import { userRoutes } from './users.routes';
import { tagRoutes } from './tags.routes';
import { complimentRoutes } from './compliments.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/tags', tagRoutes);
routes.use('/compliments', complimentRoutes);

export { routes };