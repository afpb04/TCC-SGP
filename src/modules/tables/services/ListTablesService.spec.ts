import FakeTablesRepository from '@modules/tables/repositories/fakes/FakeTablesRepository';
import ListTablesService from './ListTablesService';

let fakeTablesRepository: FakeTablesRepository;
let listTables: ListTablesService;

describe('listtable', () => {
  beforeEach(() => {
    fakeTablesRepository = new FakeTablesRepository();

    listTables = new ListTablesService(fakeTablesRepository);
  });

  it('should be able to list the categories', async () => {
    const table = await fakeTablesRepository.create({
      company_id: 'empresa-id',
      name: 'table01',
      available: true,
    });
    const table1 = await fakeTablesRepository.create({
      company_id: 'empresa-id',
      name: 'table02',
      available: true,
    });
    await fakeTablesRepository.create({
      company_id: 'empresa-id-01',
      name: 'table01',
      available: true,
    });

    const tables = await listTables.execute({
      company_id: 'empresa-id',
    });

    expect(tables).toEqual([table, table1]);
  });
});
