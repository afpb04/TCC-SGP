import { getRepository } from 'typeorm';

import Company from '@modules/company/infra/typeorm/entities/Company';

interface Request {
  name: string;
  cnpj: string;
}
class CreateCompanyService {
  public async execute({ name, cnpj }: Request): Promise<Company> {
    const companyRepository = getRepository(Company);

    const company = companyRepository.create({
      name,
      cnpj,
    });
    await companyRepository.save(company);
    return company;
  }
}
export default CreateCompanyService;
