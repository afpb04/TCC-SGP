/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import Order from '@modules/order/infra/typeorm/entities/Order';

interface Request {
  totals: number;
  isfinished: boolean;
  company_id: string;
}
class CreateOrderService {
  public async execute({
    totals,
    isfinished,
    company_id,
  }: Request): Promise<Order> {
    const orderRepository = getRepository(Order);

    const order = orderRepository.create({
      totals,
      isfinished,
      company_id,
    });
    await orderRepository.save(order);

    return order;
  }
}

export default CreateOrderService;
