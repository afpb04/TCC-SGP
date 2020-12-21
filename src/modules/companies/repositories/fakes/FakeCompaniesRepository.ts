import { uuid } from 'uuidv4';
import ICompaniesRepository from '@modules/companies/repositories/ICompaiesRepository';
import ICreateCompanyDTO from '@modules/companies/dtos/ICreateCompanyDTO';
import Company from '../../infra/typeorm/entities/Company';

class CompaniesRepository implements ICompaniesRepository {
  private companies: Company[] = [];

  public async findByCNPJ(cnpj: string): Promise<Company | undefined> {
    const findCompany = this.companies.find(company => company.cnpj === cnpj);
    return findCompany;
  }

  public async create({ cnpj, name }: ICreateCompanyDTO): Promise<Company> {
    const companies = new Company();

    Object.assign(companies, { id: uuid(), cnpj, name });

    this.companies.push(companies);

    return companies;
  }
}
export default CompaniesRepository;
