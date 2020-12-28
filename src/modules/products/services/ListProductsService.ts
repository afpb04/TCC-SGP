/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';
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
  ) {}

  public async execute({ company_id }: IRequest): Promise<Product[]> {
    const products = await this.productsRepository.findALlProducts({
      company_id,
    });

    return products;
  }
}
export default ListProductsService;
