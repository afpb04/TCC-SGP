import Table from '../infra/typeorm/entities/Table';
import ICreateTableDTO from '../dtos/ICreateTableDTO';

export default interface ITablesRepository {
  create(data: ICreateTableDTO): Promise<Table>;
  findById(id: string): Promise<Table | undefined>;
}
