/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

import Category from '../infra/typeorm/entities/Category';

interface IRequest {
  company_id: string;
}

@injectable()
class ListCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ company_id }: IRequest): Promise<Category[]> {
    const products = await this.categoriesRepository.findAllCategories({
      company_id,
    });

    return products;
  }
}
export default ListCategoriesService;
