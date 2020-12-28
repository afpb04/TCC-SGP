/* eslint-disable camelcase */
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IFindAllProductsDTO from '../dtos/IFindAllProductsDTO';
import Product from '../infra/typeorm/entities/Product';

export default interface IProductRepository {
  findALlProducts(data: IFindAllProductsDTO): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
  create(data: ICreateProductDTO): Promise<Product>;
  save(product: Product): Promise<Product>;
}
