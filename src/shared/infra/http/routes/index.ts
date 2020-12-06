import { Router } from 'express';
import companiesRouter from '@modules/company/infra/http/routes/company.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import categoriesRouter from '@modules/category/infra/http/routes/category.routes';
import ordersRouter from '@modules/order/infra/http/routes/order.routes';
import productRouter from '@modules/product/infra/http/routes/product.routes';
import orderProductRouter from '@modules/orderProduct/infra/http/routes/orderProduct.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/orders', ordersRouter);
routes.use('/products', productRouter);
routes.use('/ordersproducts', orderProductRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
