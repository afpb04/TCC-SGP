/* eslint-disable camelcase */
import { uuid } from 'uuidv4';
import IProductRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IFindAllProductsDTO from '@modules/products/dtos/IFindAllProductsDTO';
import Product from '../../infra/typeorm/entities/Product';

class ProductsRepository implements IProductRepository {
  private products: Product[] = [];

  public async findById(id: string): Promise<Product | undefined> {
    const findproduct = this.products.find(product => product.id === id);
    return findproduct;
  }

  public async create({
    name,
    description,
    price,
    company_id,
    category_id,
  }: ICreateProductDTO): Promise<Product> {
    const products = new Product();

    Object.assign(products, {
      id: uuid(),
      name,
      description,
      price,
      company_id,
      category_id,
    });
    this.products.push(products);

    return products;
  }

  public async findALlProducts({
    company_id,
  }: IFindAllProductsDTO): Promise<Product[]> {
    const products = this.products.filter(
      product => product.company_id === company_id,
    );
    return products;
  }

  public async save(product: Product): Promise<Product> {
    const findIndex = this.products.findIndex(
      findProduct => findProduct.id === product.id,
    );

    this.products[findIndex] = product;
    return product;
  }
}
export default ProductsRepository;
