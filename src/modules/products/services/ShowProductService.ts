/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';

import IProductsRepository from '../repositories/IProductsRepository';

import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  product_id: string;
}

@injectable()
class ListProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ product_id }: IRequest): Promise<Product | undefined> {
    const product = await this.productsRepository.findById(product_id);

    return product;
  }
}
export default ListProductsService;
