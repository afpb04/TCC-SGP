/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/category/services/CreateCategoryService';

export default class CompaniesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, company_id } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({
      name,
      description,
      company_id,
    });
    return response.json(category);
  }
}
