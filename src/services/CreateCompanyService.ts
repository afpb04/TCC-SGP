import { getCustomRepository } from 'typeorm';

import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';

interface Request {
    name: string;
    cnpj: string;
}
class CreateCompanyService {
    public async execute({ name, cnpj }: Request): Promise<Company> {
        const companiesRepository = getCustomRepository(CompaniesRepository);

        const company = companiesRepository.create({
            name,
            cnpj,
        });
        await companiesRepository.save(company);
        return company;
    }
}
export default CreateCompanyService;
