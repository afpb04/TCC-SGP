/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import Product from '../models/Product';

interface Request {
  product_id: string;
  imgFilename: string;
}
class UpdateProductImgService {
  public async execute({ product_id, imgFilename }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne(product_id);
    if (!product) {
      throw new Error('Only authenticated users can change img');
    }
    if (product.img) {
      const productImgFilePath = path.join(uploadConfig.directory, product.img);
      const productImgFileExists = await fs.promises.stat(productImgFilePath);

      if (productImgFileExists) {
        await fs.promises.unlink(productImgFilePath);
      }
    }
    product.img = imgFilename;

    await productsRepository.save(product);

    return product;
  }
}
export default UpdateProductImgService;
