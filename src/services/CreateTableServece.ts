/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import Table from '../models/Table';

interface Request {
  name: string;
  available: boolean;
  company_id: string;
}
class CreateTableService {
  public async execute({
    name,
    available,
    company_id,
  }: Request): Promise<Table> {
    const tableRepository = getRepository(Table);

    const table = tableRepository.create({
      name,
      available,
      company_id,
    });
    await tableRepository.save(table);

    return table;
  }
}
export default CreateTableService;
