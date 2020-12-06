/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateOrderService from '@modules/order/services/CreateOrderService';
import Order from '../../typeorm/entities/Order';

const ordersRouter = Router();

ordersRouter.get('/', async (request, response) => {
  const ordersRepository = getRepository(Order);
  const orders = await ordersRepository.find();

  return response.json(orders);
});

ordersRouter.post('/', async (request, response) => {
  const { totals, isfinished, company_id } = request.body;

  const createOrder = new CreateOrderService();

  const order = await createOrder.execute({
    totals,
    isfinished,
    company_id,
  });
  return response.json(order);
});
export default ordersRouter;
