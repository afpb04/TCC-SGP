/* eslint-disable camelcase */
import { Router } from 'express';
import OrderProductController from '../controllers/orderProductController';

const orderProductRouter = Router();
const orderProductController = new OrderProductController();

orderProductRouter.post('/', orderProductController.create);

export default orderProductRouter;
