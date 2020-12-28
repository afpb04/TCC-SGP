/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IFindAllProductsDTO from '@modules/products/dtos/IFindAllProductsDTO';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = this.ormRepository.findOne(id);
    return product;
  }

  public async findALlProducts({
    company_id,
  }: IFindAllProductsDTO): Promise<Product[]> {
    const products = await this.ormRepository.find({
      where: { company_id },
    });
    return products;
  }

  public async create(productData: ICreateProductDTO): Promise<Product> {
    const product = await this.ormRepository.create(productData);
    await this.ormRepository.save(product);
    return product;
  }

  public async save(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }
}
export default ProductsRepository;
