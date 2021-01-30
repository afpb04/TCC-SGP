/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { classToClass } from 'class-transformer';
import IProductsRepository from '../repositories/IProductsRepository';

import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  company_id: string;
}

@injectable()
class ListProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ company_id }: IRequest): Promise<Product[]> {
    let products = null; // await this.cacheProvider.recover<Product[]>(
    //   `products-list:${company_id}`,
    // );
    if (!products) {
      products = await this.productsRepository.findALlProducts({
        company_id,
      });

      await this.cacheProvider.save(
        `products-list:${company_id}`,
        classToClass(products),
      );
    }

    return products;
  }
}
export default ListProductsService;
