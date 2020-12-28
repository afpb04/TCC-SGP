/* eslint-disable camelcase */
import { uuid } from 'uuidv4';
import ITablesRepository from '@modules/tables/repositories/ITablesRepository';
import ICreateTableDTO from '@modules/tables/dtos/ICreateTableDTO';
import IFindAlltablesDTO from '@modules/tables/dtos/IFindAlltablesDTO';
import Table from '../../infra/typeorm/entities/Table';

class FakeTablesRepository implements ITablesRepository {
  private tables: Table[] = [];

  public async findById(id: string): Promise<Table | undefined> {
    const findTable = this.tables.find(table => table.id === id);
    return findTable;
  }

  public async FindAllTables({
    company_id,
  }: IFindAlltablesDTO): Promise<Table[]> {
    const tables = this.tables.filter(
      category => category.company_id === company_id,
    );
    return tables;
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
