import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateCompanyService from '../services/CreateCompanyService';
import Company from '../models/Company';

const companiesRouter = Router();

companiesRouter.get('/', async (request, response) => {
  const companiesRepository = getRepository(Company);
  const companies = await companiesRepository.find();

  return response.json(companies);
});
companiesRouter.post('/', async (request, response) => {
  const { name, cnpj } = request.body;

  const createCompany = new CreateCompanyService();

  const company = await createCompany.execute({
    name,
    cnpj,
  });
  return response.json(company);
});
export default companiesRouter;
