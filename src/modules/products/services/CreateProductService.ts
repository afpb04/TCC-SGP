/* eslint-disable camelcase */
import Product from '@modules/products/infra/typeorm/entities/Product';
import { injectable, inject } from 'tsyringe';

import IProductRepository from '../repositories/IProductsRepository';

interface Request {
  name: string;
  description: string;
  price: number;
  company_id: string;
  category_id: string;
}
@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({
    name,
    description,
    price,
    company_id,
    category_id,
  }: Request): Promise<Product> {
    const product = this.productRepository.create({
      name,
      description,
      price,
      company_id,
      category_id,
    });

    return product;
  }
}
export default CreateProductService;
