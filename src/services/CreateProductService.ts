/* eslint-disable camelcase */
import { getRepository } from 'typeorm';

import Product from '../models/Product';

interface Request {
  name: string;
  description: string;
  price: number;
  company_id: string;
  category_id: string;
}
class CreateProductService {
  public async execute({
    name,
    description,
    price,
    company_id,
    category_id,
  }: Request): Promise<Product> {
    const productRepository = getRepository(Product);

    const product = productRepository.create({
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