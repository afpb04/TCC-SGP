/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';
import ITablesRepository from '../repositories/ITablesRepository';

import Table from '../infra/typeorm/entities/Table';

interface IRequest {
  company_id: string;
}

@injectable()
class ListTablesService {
  constructor(
    @inject('TablesRepository')
    private tablesRepository: ITablesRepository,
  ) {}

  public async execute({ company_id }: IRequest): Promise<Table[]> {
    const tables = await this.tablesRepository.FindAllTables({
      company_id,
    });

    return tables;
  }
}
export default ListTablesService;
