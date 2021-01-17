/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import ListCategoriesService from '@modules/categories/services/ListCategoriesService';

export default class CompaniesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { company_id } = request.user;

    const showCategories = container.resolve(ListCategoriesService);

    const categories = await showCategories.execute({
      company_id,
    });
    return response.json(categories);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const { company_id } = request.user;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({
      name,
      description,
      company_id,
    });
    return response.json(category);
  }
}
