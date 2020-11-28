/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import OrderProduct from '../models/OrderProduct';
import CreateOrderProductService from '../services/CreateOrderProductService';

const orderProductRouter = Router();

orderProductRouter.get('/', async (request, response) => {
  const orderProductRepository = getRepository(OrderProduct);
  const orderProduct = await orderProductRepository.find();
  return response.json(orderProduct);
});

orderProductRouter.post('/', async (request, response) => {
  try {
    const { price, totals, amount, orders_id, products_id } = request.body;

    const createOrderProduct = new CreateOrderProductService();

    const orderProduct = await createOrderProduct.execute({
      price,
      totals,
      amount,
      orders_id,
      products_id,
    });
    return response.json(orderProduct);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default orderProductRouter;
