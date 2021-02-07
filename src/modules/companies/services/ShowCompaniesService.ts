/* eslint-disable camelcase */
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICompaiesRepository from '../repositories/ICompaiesRepository';

import Company from '../infra/typeorm/entities/Company';

interface IRequest {
  company_id: string;
}

@injectable()
class ShowCompanyService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaiesRepository,
  ) {}

  public async execute({ company_id }: IRequest): Promise<Company> {
    const company = await this.companiesRepository.findById(company_id);

    if (!company) {
      throw new AppError('Company not found.');
    }
    return company;
  }
}
export default ShowCompanyService;
