import { Router } from 'express';

import { CreateUserController } from '../controllers/CreateUserController';
import {
  AutheticatedUserController 
} from '../controllers/AutheticatedUserController';
import { 
  ListUserSenderComplimentsController 
} from '../controllers/ListUserSenderComplimentsController';
import { 
  ListUserReceiverComplimentsController 
} from '../controllers/ListUserReceiverComplimentsController';
import { ensureAutheticated } from '../middlewares/ensureAutheticated';
import { ListUserController } from '../controllers/ListUsersController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const authicatedUserController = new AutheticatedUserController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listUsersController = new ListUserController();

userRoutes.post('/', createUserController.handle);
userRoutes.post('/session', authicatedUserController.handle);

userRoutes.get(
  '/compliments/send', 
  ensureAutheticated,
  listUserSenderComplimentsController.handle
);
userRoutes.get(
  '/compliments/receiver', 
  ensureAutheticated,
  listUserReceiverComplimentsController.handle
);

userRoutes.get('/', ensureAutheticated, listUsersController.handle)

export { userRoutes };