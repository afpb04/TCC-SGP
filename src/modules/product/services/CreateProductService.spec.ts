import FakeProductsRepository from '../repositories/fakes/FakeProductRepository';
import CreateProductService from './CreateProductService';

describe('Create product', () => {
  it('Should be able to create new product', async () => {
    const fakeProductsRepository = new FakeProductsRepository();
    const createProduct = new CreateProductService(fakeProductsRepository);

    const product = await createProduct.execute({
      name: 'pizza',
      description: 'pizza de bacon',
      price: 22,
      category_id: 'pizzacategoria',
      company_id: 'idGopizza',
    });
    expect(product).toHaveProperty('id');
  });
});
