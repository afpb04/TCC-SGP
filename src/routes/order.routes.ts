/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';

import Order from '../models/Order';
import CreateOrderService from '../services/CreateOrderService';

const ordersRouter = Router();

ordersRouter.get('/', async (request, response) => {
  const ordersRepository = getRepository(Order);
  const orders = await ordersRepository.find();

  return response.json(orders);
});

ordersRouter.post('/', async (request, response) => {
  try {
    const { totals, isfinished, company_id } = request.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({
      totals,
      isfinished,
      company_id,
    });
    return response.json(order);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
export default ordersRouter;
