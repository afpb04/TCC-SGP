/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateOrderProductService from '@modules/orderProduct/services/CreateOrderProductService';
import OrderProduct from '../../typeorm/entities/OrderProduct';

const orderProductRouter = Router();

orderProductRouter.get('/', async (request, response) => {
  const orderProductRepository = getRepository(OrderProduct);
  const orderProduct = await orderProductRepository.find();
  return response.json(orderProduct);
});

orderProductRouter.post('/', async (request, response) => {
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
});

export default orderProductRouter;
