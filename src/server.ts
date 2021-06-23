import 'reflect-metadata'
import express from 'express';
import 'express-async-errors';

import './database'
import { routes } from './routes';
import { handleError } from './middlewares/ErrorMiddleware';

const app = express();

app.use(express.json());

app.use('/api/v1', routes);

app.use(handleError);

app.listen(3000, () => console.log('Server is running'));