import { Router } from 'express';
import companiesRouter from './company.routes';

const routes = Router();

routes.use('/companies', companiesRouter);

export default routes;
