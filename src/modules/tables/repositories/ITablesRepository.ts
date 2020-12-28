import Table from '../infra/typeorm/entities/Table';
import ICreateTableDTO from '../dtos/ICreateTableDTO';
import IFindAlltablesDTO from '../dtos/IFindAlltablesDTO';

export default interface ITablesRepository {
  FindAllTables(data: IFindAlltablesDTO): Promise<Table[]>;
  create(data: ICreateTableDTO): Promise<Table>;
  findById(id: string): Promise<Table | undefined>;
}
