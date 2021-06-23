import { Router } from 'express';

import { userRoutes } from './users.routes';
import { tagRoutes } from './tags.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/tags', tagRoutes);

export { routes };