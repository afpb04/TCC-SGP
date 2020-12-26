/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';
import ListProductsService from '@modules/products/services/ListProductsService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { company_id } = request.user;

    const showProducts = container.resolve(ListProductsService);

    const products = await showProducts.execute({
      company_id,
    });
    return response.json(products);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, price, company_id, category_id } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      description,
      price,
      company_id,
      category_id,
    });
    return response.json(product);
  }
}
