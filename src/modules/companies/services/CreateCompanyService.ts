import Company from '@modules/companies/infra/typeorm/entities/Company';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

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
    const checkCompanyExists = await this.companiesRepository.findByCNPJ(cnpj);
    if (checkCompanyExists) {
      throw new AppError('CNPJ already used');
    }
    const company = this.companiesRepository.create({
      name,
      cnpj,
    });

    return company;
  }
}
export default CreateCompanyService;
