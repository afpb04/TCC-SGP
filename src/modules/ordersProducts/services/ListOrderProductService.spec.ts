import FakeOrdersProductsRepository from '@modules/ordersProducts/repositories/fakes/FakeOrdersProductsRepository';
import ListOrderProductService from './ListOrderProductService';

let fakeOrdersProductsRepository: FakeOrdersProductsRepository;
let listOrderProductService: ListOrderProductService;

describe('listOrdersProducts', () => {
  beforeEach(() => {
    fakeOrdersProductsRepository = new FakeOrdersProductsRepository();

    listOrderProductService = new ListOrderProductService(
      fakeOrdersProductsRepository,
    );
  });

  it('should be able to list the categories', async () => {
    const orderProduct = await fakeOrdersProductsRepository.create({
      amount: 2,
      orders_id: 'orderId',
      price: 12,
      products_id: 'product_id',
      totals: 24,
    });
    const orderProduct1 = await fakeOrdersProductsRepository.create({
      amount: 3,
      orders_id: 'orderId',
      price: 12,
      products_id: 'product_id',
      totals: 36,
    });
    await fakeOrdersProductsRepository.create({
      amount: 2,
      orders_id: 'order_id',
      price: 12,
      products_id: 'product_id',
      totals: 24,
    });

    const orderProducts = await listOrderProductService.execute({
      orders_id: 'orderId',
    });

    expect(orderProducts).toEqual([orderProduct, orderProduct1]);
  });
});
