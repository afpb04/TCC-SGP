import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository';
import CreateOrderService from './CreateOrderService';

describe('CreateCategory', () => {
  it('Should be able to create new category', async () => {
    const fakeOrderRepository = new FakeOrdersRepository();
    const createOrder = new CreateOrderService(fakeOrderRepository);

    const order = await createOrder.execute({
      totals: 120,
      isfinished: false,
      table_id: 'table-id',
    });
    expect(order).toHaveProperty('id');
  });
});
