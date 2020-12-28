/* eslint-disable camelcase */
import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import OrderController from '../controllers/OrderController';

const ordersRouter = Router();
const orderController = new OrderController();
ordersRouter.use(ensureAuthenticated);

ordersRouter.get('/:id', orderController.show);
ordersRouter.post('/', orderController.create);
export default ordersRouter;
