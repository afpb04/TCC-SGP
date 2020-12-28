/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '@modules/orders/services/CreateOrderService';
import ShowOrdersService from '@modules/orders/services/ShowOrdersService';

export default class OrderController {
  public async show(request: Request, response: Response): Promise<Response> {
    const table_id = request.params.id;

    const showOrders = container.resolve(ShowOrdersService);

    const orders = await showOrders.execute({
      table_id,
    });
    return response.json(orders);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { totals, isfinished, table_id } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      totals,
      isfinished,
      table_id,
    });
    return response.json(order);
  }
}
