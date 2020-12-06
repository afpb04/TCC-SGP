import Company from '@modules/company/infra/typeorm/entities/Company';
import { injectable, inject } from 'tsyringe';

import ICompanyRepository from '../repositories/ICompaiesRepository';

interface IRequest {
  name: string;
  cnpj: string;
}
@injectable()
class CreateCompanyService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompanyRepository,
  ) {}

  public async execute({ name, cnpj }: IRequest): Promise<Company> {
    const company = this.companiesRepository.create({
      name,
      cnpj,
    });

    return company;
  }
}
export default CreateCompanyService;
