import FakeOrdersProductsRepository from '../repositories/fakes/FakeOrdersProductsRepository';
import CreateOrderProductService from './CreateOrderProductService';

describe('CreateOrderProduct', () => {
  it('Should be able to create new orderProduct', async () => {
    const fakeOrdersProductsRepository = new FakeOrdersProductsRepository();
    const createOrderProduct = new CreateOrderProductService(
      fakeOrdersProductsRepository,
    );

    const category = await createOrderProduct.execute({
      price: 10,
      totals: 20,
      amount: 2,
      orders_id: 'order-id',
      products_id: 'product-id',
    });
    expect(category).toHaveProperty('id');
  });
});
