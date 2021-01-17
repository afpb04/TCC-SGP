/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTableService from '@modules/tables/services/CreateTableService';
import ListTablesService from '@modules/tables/services/ListTablesService';

export default class TablesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { company_id } = request.user;

    const showTables = container.resolve(ListTablesService);

    const tables = await showTables.execute({
      company_id,
    });
    return response.json(tables);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { company_id } = request.user;
    const { name, available } = request.body;

    const createTable = container.resolve(CreateTableService);

    const table = await createTable.execute({
      name,
      available,
      company_id,
    });
    return response.json(table);
  }
}
