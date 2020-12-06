import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCompanyService from '@modules/company/services/CreateCompanyService';

export default class CompaniesControler {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cnpj } = request.body;

    const createCompany = container.resolve(CreateCompanyService);

    const company = await createCompany.execute({
      name,
      cnpj,
    });
    return response.json(company);
  }
}
