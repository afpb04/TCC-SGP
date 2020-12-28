/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';
import IOrderProductRepository from '@modules/ordersProducts/repositories/IOrderProductRepository';
import ICreateOrderProductDTO from '@modules/ordersProducts/dtos/ICreateOrderProductDTO';
import IFindOrderProductDTO from '@modules/ordersProducts/dtos/IFindOrderProductDTO';
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

  public async findByOrder({
    orders_id,
  }: IFindOrderProductDTO): Promise<OrderProduct[]> {
    const findOrderProduct = await this.ormRepository.find({
      join: {
        alias: 'orders_products',
        leftJoinAndSelect: {
          product: 'orders_products.product',
        },
      },
      where: { orders_id },
    });

    return findOrderProduct;
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
