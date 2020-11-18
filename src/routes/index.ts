import { Router } from 'express';
import companiesRouter from './company.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/users', usersRouter);

export default routes;
