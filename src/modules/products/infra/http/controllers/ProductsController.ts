/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';
import ListProductsService from '@modules/products/services/ListProductsService';
import ShowProductService from '@modules/products/services/ShowProductService';
import { classToClass } from 'class-transformer';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { company_id } = request.user;

    const showProducts = container.resolve(ListProductsService);

    const products = await showProducts.execute({
      company_id,
    });
    return response.json(classToClass(products));
  }

  public async indexPlublic(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { company_id } = request.params;

    const showProducts = container.resolve(ListProductsService);

    const products = await showProducts.execute({
      company_id,
    });
    return response.json(classToClass(products));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProduct = container.resolve(ShowProductService);

    const product = await showProduct.execute({
      product_id: id,
    });
    return response.json(classToClass(product));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { company_id } = request.user;
    const { name, description, price, category_id } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      description,
      price,
      company_id,
      category_id,
    });
    return response.json(classToClass(product));
  }
}
