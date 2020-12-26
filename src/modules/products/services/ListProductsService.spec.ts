import FakeProductRepository from '@modules/products/repositories/fakes/FakeProductRepository';
import ListProductsService from './ListProductsService';

let fakeProductsRepository: FakeProductRepository;
let listProducts: ListProductsService;

describe('ListProducts', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductRepository();

    listProducts = new ListProductsService(fakeProductsRepository);
  });

  it('should be able to list the products', async () => {
    const product = await fakeProductsRepository.create({
      company_id: 'empresa-id',
      category_id: 'category01',
      description: 'xburg',
      name: 'xburg',
      price: 10,
    });
    const product1 = await fakeProductsRepository.create({
      company_id: 'empresa-id',
      category_id: 'category01',
      description: 'x-bacon',
      name: 'x-bacon',
      price: 10,
    });
    await fakeProductsRepository.create({
      company_id: 'empresa-id-01',
      category_id: 'category01',
      description: 'x-salada',
      name: 'x-salada',
      price: 10,
    });

    const products = await listProducts.execute({
      company_id: 'empresa-id',
    });

    expect(products).toEqual([product, product1]);
  });
});
