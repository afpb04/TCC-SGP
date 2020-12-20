/* eslint-disable camelcase */
import OrderProduct from '@modules/orderProduct/infra/typeorm/entities/OrderProduct';
import { injectable, inject } from 'tsyringe';

import IOrderProductRepository from '../repositories/IOrderProductRepository';

interface Request {
  price: number;
  totals: number;
  amount: number;
  orders_id: string;
  products_id: string;
}
@injectable()
class CreateOrderProductService {
  constructor(
    @inject('OrdersProductsRepository')
    private ordersProductsRepository: IOrderProductRepository,
  ) {}

  public async execute({
    price,
    totals,
    amount,
    orders_id,
    products_id,
  }: Request): Promise<OrderProduct> {
    const orderProduct = this.ordersProductsRepository.create({
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
