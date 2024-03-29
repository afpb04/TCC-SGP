/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Order from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne(id);
    return order;
  }

  public async findByTable(table_id: string): Promise<Order[]> {
    const orders = this.ormRepository.find({
      relations: ['table', 'ordersProducts'],
      where: {
        table_id,
      },
    });
    return orders;
  }

  public async create(orderData: ICreateOrderDTO): Promise<Order> {
    const order = await this.ormRepository.create(orderData);
    await this.ormRepository.save(order);
    return order;
  }
}
export default OrdersRepository;
