/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';
import IOrderProductRepository from '../repositories/IOrderProductRepository';

import OrderProduct from '../infra/typeorm/entities/OrderProduct';

interface IRequest {
  orders_id: string;
}

@injectable()
class ListOrderProductService {
  constructor(
    @inject('OrdersProductsRepository')
    private categoriesRepository: IOrderProductRepository,
  ) {}

  public async execute({ orders_id }: IRequest): Promise<OrderProduct[]> {
    const orderProduct = await this.categoriesRepository.findByOrder({
      orders_id,
    });

    return orderProduct;
  }
}
export default ListOrderProductService;
