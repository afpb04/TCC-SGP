/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';
import IOrdersRepository from '../repositories/IOrdersRepository';

import Order from '../infra/typeorm/entities/Order';

interface IRequest {
  table_id: string;
}

@injectable()
class ShowOrdersService {
  constructor(
    @inject('OrdersRepository')
    private categoriesRepository: IOrdersRepository,
  ) {}

  public async execute({ table_id }: IRequest): Promise<Order[]> {
    const orders = await this.categoriesRepository.findByTable(table_id);

    return orders;
  }
}
export default ShowOrdersService;
