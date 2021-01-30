import FakeProductRepository from '@modules/products/repositories/fakes/FakeProductRepository';

import ShowProductService from './ShowProductService';

let fakeProductsRepository: FakeProductRepository;
let showProduct: ShowProductService;

describe('show product', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductRepository();

    showProduct = new ShowProductService(fakeProductsRepository);
  });

  it('should be able to show product by id', async () => {
    const product = await fakeProductsRepository.create({
      company_id: 'empresa-id',
      category_id: 'category01',
      description: 'xburg',
      name: 'xburg',
      price: 10,
    });

    const products = await showProduct.execute({
      product_id: product.id,
    });

    expect(products?.name).toBe('xburg');
  });
});
