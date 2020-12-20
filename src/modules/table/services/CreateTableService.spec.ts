import FakeTablesRepository from '../repositories/fakes/FakeTablesRepository';
import CreateTableService from './CreateTableService';

describe('CreateTable', () => {
  it('Should be able to create new table', async () => {
    const fakeTablesRepository = new FakeTablesRepository();
    const createTable = new CreateTableService(fakeTablesRepository);

    const table = await createTable.execute({
      name: 'Mesa 001',
      available: true,
      company_id: 'company-id',
    });
    expect(table).toHaveProperty('id');
  });
});
