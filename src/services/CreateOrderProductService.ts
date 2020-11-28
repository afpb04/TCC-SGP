/* eslint-disable camelcase */
import { getRepository } from 'typeorm';

import OrderProduct from '../models/OrderProduct';

interface Request {
  price: number;
  totals: number;
  amount: number;
  orders_id: string;
  products_id: string;
}
class CreateOrderProductService {
  public async execute({
    price,
    totals,
    amount,
    orders_id,
    products_id,
  }: Request): Promise<OrderProduct> {
    const orderProductRepository = getRepository(OrderProduct);

    const orderProduct = orderProductRepository.create({
      price,
      totals,
      amount,
      orders_id,
      products_id,
    });
    return orderProduct;
  }
}
export default CreateOrderProductService;
