/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import Category from '../models/Category';

interface Request {
  name: string;
  description: string;
  company_id: string;
}
class CreateCategoryService {
  public async execute({
    name,
    description,
    company_id,
  }: Request): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const category = categoryRepository.create({
      name,
      description,
      company_id,
    });
    await categoryRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
