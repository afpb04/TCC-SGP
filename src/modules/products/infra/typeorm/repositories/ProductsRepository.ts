/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormReposioty: Repository<Product>;

  constructor() {
    this.ormReposioty = getRepository(Product);
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = this.ormReposioty.findOne(id);
    return product;
  }

  public async findALlProducts(company_id: string): Promise<Product[]> {
    const products = await this.ormReposioty.find({
      where: { company_id },
    });
    return products;
  }

  public async create(productData: ICreateProductDTO): Promise<Product> {
    const product = await this.ormReposioty.create(productData);
    await this.ormReposioty.save(product);
    return product;
  }

  public async save(product: Product): Promise<Product> {
    return this.ormReposioty.save(product);
  }
}
export default ProductsRepository;
