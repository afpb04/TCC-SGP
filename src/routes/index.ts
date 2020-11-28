import { Router } from 'express';
import companiesRouter from './company.routes';
import usersRouter from './users.routes';
import categoriesRouter from './category.routes';
import ordersRouter from './order.routes';
import productRouter from './product.routes';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/orders', ordersRouter);
routes.use('/products', productRouter);

export default routes;
