import { getRepository, Repository } from 'typeorm';
import IOrderProductRepository from '@modules/orderProduct/repositories/IOrderProductRepository';
import ICreateOrderProductDTO from '@modules/orderProduct/dtos/ICreateOrderProductDTO';
import OrderProduct from '../entities/OrderProduct';

class OrdersProductsRepository implements IOrderProductRepository {
  private ormRepository: Repository<OrderProduct>;

  constructor() {
    this.ormRepository = getRepository(OrderProduct);
  }

  public async findById(id: string): Promise<OrderProduct | undefined> {
    const orderProduct = await this.ormRepository.findOne(id);
    return orderProduct;
  }

  public async create(
    orderData: ICreateOrderProductDTO,
  ): Promise<OrderProduct> {
    const orderProduct = await this.ormRepository.create(orderData);
    await this.ormRepository.save(orderProduct);
    return orderProduct;
  }
}
export default OrdersProductsRepository;
