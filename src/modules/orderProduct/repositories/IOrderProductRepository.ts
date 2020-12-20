import OrderProduct from '../infra/typeorm/entities/OrderProduct';
import ICreateOrderProductDTO from '../dtos/ICreateOrderProductDTO';

export default interface ICategoriesRepository {
  create(data: ICreateOrderProductDTO): Promise<OrderProduct>;
  findById(id: string): Promise<OrderProduct | undefined>;
}
