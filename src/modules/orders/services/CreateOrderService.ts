/* eslint-disable camelcase */
import Order from '@modules/orders/infra/typeorm/entities/Order';
import { injectable, inject } from 'tsyringe';

import IOrdersRepository from '../repositories/IOrdersRepository';

interface Request {
  totals: number;
  isfinished: boolean;
  table_id: string;
}
@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute({
    totals,
    isfinished,
    table_id,
  }: Request): Promise<Order> {
    const order = this.ordersRepository.create({
      totals,
      isfinished,
      table_id,
    });

    return order;
  }
}

export default CreateOrderService;
