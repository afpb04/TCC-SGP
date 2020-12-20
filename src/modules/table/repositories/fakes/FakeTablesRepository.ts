/* eslint-disable camelcase */
import { uuid } from 'uuidv4';
import ITablesRepository from '@modules/table/repositories/ITablesRepository';
import ICreateTableDTO from '@modules/table/dtos/ICreateTableDTO';
import Table from '../../infra/typeorm/entities/Table';

class FakeTablesRepository implements ITablesRepository {
  private tables: Table[] = [];

  public async findById(id: string): Promise<Table | undefined> {
    const findTable = this.tables.find(table => table.id === id);
    return findTable;
  }

  public async create({
    name,
    available,
    company_id,
  }: ICreateTableDTO): Promise<Table> {
    const tables = new Table();

    Object.assign(tables, { id: uuid(), name, available, company_id });

    this.tables.push(tables);
    return tables;
  }
}
export default FakeTablesRepository;
