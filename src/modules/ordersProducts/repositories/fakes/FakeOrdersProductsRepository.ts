/* eslint-disable camelcase */
import { uuid } from 'uuidv4';
import IOrderProductRepository from '@modules/ordersProducts/repositories/IOrderProductRepository';
import ICreateOrderProductDTO from '@modules/ordersProducts/dtos/ICreateOrderProductDTO';
import IFindOrderProductDTO from '@modules/ordersProducts/dtos/IFindOrderProductDTO';
import OrderProduct from '../../infra/typeorm/entities/OrderProduct';

class FakeOdersProductsRepository implements IOrderProductRepository {
  private orderProduct: OrderProduct[] = [];

  public async findById(id: string): Promise<OrderProduct | undefined> {
    const findOrderProduct = this.orderProduct.find(
      orderProduct => orderProduct.id === id,
    );
    return findOrderProduct;
  }

  public async findByOrder({
    orders_id,
  }: IFindOrderProductDTO): Promise<OrderProduct[]> {
    const findOrderProduct = this.orderProduct.filter(
      orderProduct => orderProduct.orders_id === orders_id,
    );
    return findOrderProduct;
  }

  public async create({
    price,
    totals,
    amount,
    orders_id,
    products_id,
  }: ICreateOrderProductDTO): Promise<OrderProduct> {
    const orderProduct = new OrderProduct();

    Object.assign(orderProduct, {
      id: uuid(),
      price,
      totals,
      amount,
      orders_id,
      products_id,
    });

    this.orderProduct.push(orderProduct);

    return orderProduct;
  }
}
export default FakeOdersProductsRepository;
