import AppError from '@shared/errors/AppError';
import FakeCompaniesRepository from '../repositories/fakes/FakeCompaniesRepository';
import CreateCompanyService from './CreateCompanyService';

describe('CreateCompany', () => {
  it('Should be able to create new company', async () => {
    const fakecompaniesRepository = new FakeCompaniesRepository();
    const createCompany = new CreateCompanyService(fakecompaniesRepository);

    const company = await createCompany.execute({
      cnpj: '00.000.000/0001-00',
      name: 'Godelivery',
    });
    expect(company).toHaveProperty('id');
  });
  it('Should not be able to create new company on the same cnpj', async () => {
    const fakecompaniesRepository = new FakeCompaniesRepository();
    const createCompany = new CreateCompanyService(fakecompaniesRepository);

    await createCompany.execute({
      cnpj: '00.000.000/0001-00',
      name: 'Godelivery',
    });
    await expect(
      createCompany.execute({
        cnpj: '00.000.000/0001-00',
        name: 'Godelivery',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
