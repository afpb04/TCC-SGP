/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCompanyService from '@modules/companies/services/CreateCompanyService';
import ShowCompanyService from '@modules/companies/services/ShowCompaniesService';

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

  public async show(request: Request, response: Response): Promise<Response> {
    const company_id = request.params.id;

    const showCompany = container.resolve(ShowCompanyService);

    const company = await showCompany.execute({
      company_id,
    });
    return response.json(company);
  }
}
