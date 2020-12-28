/* eslint-disable camelcase */
import Order from '../infra/typeorm/entities/Order';
import ICreateOrderDTO from '../dtos/ICreateOrderDTO';

export default interface ICategoriesRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findByTable(table_id: string): Promise<Order[]>;
  findById(id: string): Promise<Order | undefined>;
}
