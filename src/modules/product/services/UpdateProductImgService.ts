/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import Product from '@modules/product/infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface Request {
  product_id: string;
  imgFilename: string;
}
@injectable()
class UpdateProductImgService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ product_id, imgFilename }: Request): Promise<Product> {
    const product = await this.productsRepository.findById(product_id);
    if (!product) {
      throw new AppError('Only authenticated users can change img', 401);
    }
    if (product.img) {
      await this.storageProvider.deleteFile(product.img);
    }
    const filename = await this.storageProvider.saveFile(imgFilename);

    product.img = filename;

    await this.productsRepository.save(product);

    return product;
  }
}
export default UpdateProductImgService;
