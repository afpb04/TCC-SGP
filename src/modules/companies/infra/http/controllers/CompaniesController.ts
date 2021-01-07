/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCompanyService from '@modules/companies/services/CreateCompanyService';

export default class CompaniesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { company_name, cnpj } = request.body;

    const createCompany = container.resolve(CreateCompanyService);

    const company = await createCompany.execute({
      name: company_name,
      cnpj,
    });
    return response.json(company);
  }
}
