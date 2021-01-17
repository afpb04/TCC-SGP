/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';
import ITablesRepository from '@modules/tables/repositories/ITablesRepository';
import ICreateTableDTO from '@modules/tables/dtos/ICreateTableDTO';
import IFindAlltablesDTO from '@modules/tables/dtos/IFindAlltablesDTO';
import Table from '../entities/Table';

class TablesRepository implements ITablesRepository {
  private ormRepository: Repository<Table>;

  constructor() {
    this.ormRepository = getRepository(Table);
  }

  public async FindAllTables({
    company_id,
  }: IFindAlltablesDTO): Promise<Table[]> {
    const tables = await this.ormRepository.find({
      relations: ['orders'],
      where: {
        company_id,
      },
    });
    return tables;
  }

  public async findById(id: string): Promise<Table | undefined> {
    const table = await this.ormRepository.findOne(id);
    return table;
  }

  public async create(tableData: ICreateTableDTO): Promise<Table> {
    const table = await this.ormRepository.create(tableData);
    await this.ormRepository.save(table);
    return table;
  }
}
export default TablesRepository;
