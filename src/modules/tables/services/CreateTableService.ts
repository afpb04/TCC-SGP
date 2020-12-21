/* eslint-disable camelcase */
import Table from '@modules/tables/infra/typeorm/entities/Table';
import { inject, injectable } from 'tsyringe';
// import AppError from '@shared/errors/AppError';

import ITableRepository from '../repositories/ITablesRepository';

interface IRequest {
  name: string;
  available: boolean;
  company_id: string;
}
@injectable()
class CreateTableService {
  constructor(
    @inject('TablesRepository')
    private tablesRepository: ITableRepository,
  ) {}

  public async execute({
    name,
    available,
    company_id,
  }: IRequest): Promise<Table> {
    const table = this.tablesRepository.create({
      name,
      available,
      company_id,
    });
    return table;
  }
}
export default CreateTableService;
