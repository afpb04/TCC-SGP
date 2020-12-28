import OrderProduct from '../infra/typeorm/entities/OrderProduct';
import ICreateOrderProductDTO from '../dtos/ICreateOrderProductDTO';
import IFindOrderProductDTO from '../dtos/IFindOrderProductDTO';

export default interface ICategoriesRepository {
  create(data: ICreateOrderProductDTO): Promise<OrderProduct>;
  findByOrder(data: IFindOrderProductDTO): Promise<OrderProduct[]>;
  findById(id: string): Promise<OrderProduct | undefined>;
}
