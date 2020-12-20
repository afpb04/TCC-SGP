import { getRepository, Repository } from 'typeorm';
import ITablesRepository from '@modules/table/repositories/ITablesRepository';
import ICreateTableDTO from '@modules/table/dtos/ICreateTableDTO';
import Table from '../entities/Table';

class TablesRepository implements ITablesRepository {
  private ormRepository: Repository<Table>;

  constructor() {
    this.ormRepository = getRepository(Table);
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
