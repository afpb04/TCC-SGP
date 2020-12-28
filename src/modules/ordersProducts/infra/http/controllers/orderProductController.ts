/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderProductService from '@modules/ordersProducts/services/CreateOrderProductService';
import ListOrderProductService from '@modules/ordersProducts/services/ListOrderProductService';

export default class CompaniesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const orders_id = request.params.id;

    const showOrderProducts = container.resolve(ListOrderProductService);

    const orderProducts = await showOrderProducts.execute({
      orders_id,
    });
    return response.json(orderProducts);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { price, totals, amount, orders_id, products_id } = request.body;

    const createOrderProduct = container.resolve(CreateOrderProductService);

    const orderProduct = await createOrderProduct.execute({
      price,
      totals,
      amount,
      orders_id,
      products_id,
    });
    return response.json(orderProduct);
  }
}
