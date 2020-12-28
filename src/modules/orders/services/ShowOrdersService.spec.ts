import FakeOrdersRepository from '@modules/orders/repositories/fakes/FakeOrdersRepository';
import ShowOrdersService from './ShowOrdersService';

let fakeOrdersRepository: FakeOrdersRepository;
let listOrders: ShowOrdersService;

describe('listOrderByTable', () => {
  beforeEach(() => {
    fakeOrdersRepository = new FakeOrdersRepository();

    listOrders = new ShowOrdersService(fakeOrdersRepository);
  });

  it('should be able to list the orders by table', async () => {
    const order = await fakeOrdersRepository.create({
      isfinished: false,
      table_id: 'table-id',
      totals: 0,
    });
    const order1 = await fakeOrdersRepository.create({
      isfinished: false,
      table_id: 'table-id',
      totals: 10,
    });
    await fakeOrdersRepository.create({
      isfinished: false,
      table_id: 'table-id01',
      totals: 0,
    });

    const orders = await listOrders.execute({
      table_id: 'table-id',
    });

    expect(orders).toEqual([order, order1]);
  });
});
