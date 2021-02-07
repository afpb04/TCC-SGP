import AppError from '@shared/errors/AppError';

import FakeCompaniesRepository from '@modules/companies/repositories/fakes/FakeCompaniesRepository';
import ShowCompaniesService from './ShowCompaniesService';

let fakeCompaniesRepository: FakeCompaniesRepository;
let showCompany: ShowCompaniesService;

describe('ShowCompany', () => {
  beforeEach(() => {
    fakeCompaniesRepository = new FakeCompaniesRepository();

    showCompany = new ShowCompaniesService(fakeCompaniesRepository);
  });

  it('should be able to show the campany', async () => {
    const company = await fakeCompaniesRepository.create({
      name: 'Cafe da maria',
      cnpj: '00.000.000/0001-00',
    });

    const show = await showCompany.execute({
      company_id: company.id,
    });

    expect(show.name).toBe('Cafe da maria');
    expect(show.cnpj).toBe('00.000.000/0001-00');
  });

  it('should not be able to show the company from non-existing company', async () => {
    await expect(
      showCompany.execute({
        company_id: 'non-existing-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
