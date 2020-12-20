/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '@modules/order/services/CreateOrderService';

export default class OrderController {
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
