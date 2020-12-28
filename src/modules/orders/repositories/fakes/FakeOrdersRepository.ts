/* eslint-disable camelcase */
import { uuid } from 'uuidv4';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Order from '../../infra/typeorm/entities/Order';

class FakeOrdersRepository implements IOrdersRepository {
  private orders: Order[] = [];

  public async findById(id: string): Promise<Order | undefined> {
    const findOrder = this.orders.find(order => order.id === id);
    return findOrder;
  }

  public async findByTable(table_id: string): Promise<Order[]> {
    const orders = this.orders.filter(order => order.table_id === table_id);
    return orders;
  }

  public async create({
    totals,
    isfinished,
    table_id,
  }: ICreateOrderDTO): Promise<Order> {
    const orders = new Order();

    Object.assign(orders, { id: uuid(), totals, isfinished, table_id });

    this.orders.push(orders);

    return orders;
  }
}
export default FakeOrdersRepository;
