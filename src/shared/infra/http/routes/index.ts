import { Router } from 'express';
import companiesRouter from '@modules/companies/infra/http/routes/company.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import categoriesRouter from '@modules/categories/infra/http/routes/category.routes';
import ordersRouter from '@modules/orders/infra/http/routes/order.routes';
import productRouter from '@modules/products/infra/http/routes/product.routes';
import orderProductRouter from '@modules/ordersProducts/infra/http/routes/orderProduct.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import tableRouter from '@modules/tables/infra/http/routes/table.routes';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/orders', ordersRouter);
routes.use('/products', productRouter);
routes.use('/ordersproducts', orderProductRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/table', tableRouter);
routes.use('/profile', profileRouter);

export default routes;
