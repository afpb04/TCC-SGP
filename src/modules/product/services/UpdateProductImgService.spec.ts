import AppError from '@shared/errors/AppError';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeProductsRepository from '../repositories/fakes/FakeProductRepository';
import UpdateProductImgservice from './UpdateProductImgService';

describe('UpdateProductImg', () => {
  it('Should be update new img from product', async () => {
    const fakeProductsRepository = new FakeProductsRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const updateImgProduct = new UpdateProductImgservice(
      fakeProductsRepository,
      fakeStorageProvider,
    );

    const product = await fakeProductsRepository.create({
      name: 'pizza',
      description: 'bacon',
      price: 22,
      company_id: 'id',
      category_id: 'id',
    });

    await updateImgProduct.execute({
      product_id: product.id,
      imgFilename: 'img.jpg',
    });
    expect(product.img).toBe('img.jpg');
  });

  it('Should no be able to update img from non existing product', async () => {
    const fakeProductsRepository = new FakeProductsRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const updateImgProduct = new UpdateProductImgservice(
      fakeProductsRepository,
      fakeStorageProvider,
    );

    expect(
      updateImgProduct.execute({
        product_id: 'non-existing-product',
        imgFilename: 'img.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('Should delete old img when updating new one', async () => {
    const fakeProductsRepository = new FakeProductsRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateImgProduct = new UpdateProductImgservice(
      fakeProductsRepository,
      fakeStorageProvider,
    );

    const product = await fakeProductsRepository.create({
      name: 'pizza',
      description: 'bacon',
      price: 22,
      company_id: 'id',
      category_id: 'id',
    });

    await updateImgProduct.execute({
      product_id: product.id,
      imgFilename: 'img.jpg',
    });

    await updateImgProduct.execute({
      product_id: product.id,
      imgFilename: 'img2.jpg',
    });
    expect(deleteFile).toHaveBeenCalledWith('img.jpg');
    expect(product.img).toBe('img2.jpg');
  });
});
