/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTableService from '@modules/tables/services/CreateTableService';

export default class TablesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, available, company_id } = request.body;

    const createTable = container.resolve(CreateTableService);

    const table = await createTable.execute({
      name,
      available,
      company_id,
    });
    return response.json(table);
  }
}
