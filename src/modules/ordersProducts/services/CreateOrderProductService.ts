/* eslint-disable camelcase */
import OrderProduct from '@modules/ordersProducts/infra/typeorm/entities/OrderProduct';
import { injectable, inject } from 'tsyringe';

import INotificationsRepository from '@modules/notifcations/repositories/INotificationsRepository';
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

    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
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

    await this.notificationsRepository.create({
      recipient_id: 'ce795644-a7d4-4b4e-ae48-19d8d7c1d7a5',
      content: `Novo pedido ${orders_id}, item ${products_id}, quantidade: ${amount}  `,
    });

    return orderProduct;
  }
}
export default CreateOrderProductService;
