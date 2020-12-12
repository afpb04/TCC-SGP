import { getRepository, Repository } from 'typeorm';
import ICompaniesRepository from '@modules/company/repositories/ICompaiesRepository';
import ICreateCompanyDTO from '@modules/company/dtos/ICreateCompanyDTO';
import Company from '../entities/Company';

class CompaniesRepository implements ICompaniesRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = getRepository(Company);
  }

  public async findByCNPJ(cnpj: string): Promise<Company | undefined> {
    const company = await this.ormRepository.findOne({
      where: { cnpj },
    });
    return company;
  }

  public async create(companyData: ICreateCompanyDTO): Promise<Company> {
    const company = await this.ormRepository.create(companyData);
    await this.ormRepository.save(company);
    return company;
  }
}
export default CompaniesRepository;