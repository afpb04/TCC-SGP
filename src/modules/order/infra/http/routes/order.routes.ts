/* eslint-disable camelcase */
import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const ordersRouter = Router();
const orderController = new OrderController();

ordersRouter.post('/', orderController.create);
export default ordersRouter;
