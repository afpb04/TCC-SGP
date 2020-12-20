/* eslint-disable camelcase */
import Category from '@modules/category/infra/typeorm/entities/Category';
import { injectable, inject } from 'tsyringe';

import ICategoriesRepository from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
  company_id: string;
}
@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({
    name,
    description,
    company_id,
  }: IRequest): Promise<Category> {
    const category = this.categoriesRepository.create({
      name,
      description,
      company_id,
    });

    return category;
  }
}

export default CreateCategoryService;
