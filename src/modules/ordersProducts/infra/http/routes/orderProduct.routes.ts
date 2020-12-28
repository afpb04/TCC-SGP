/* eslint-disable camelcase */
import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import OrderProductController from '../controllers/orderProductController';

const orderProductRouter = Router();
const orderProductController = new OrderProductController();
orderProductRouter.use(ensureAuthenticated);

orderProductRouter.get('/:id', orderProductController.show);

orderProductRouter.post('/', orderProductController.create);

export default orderProductRouter;
