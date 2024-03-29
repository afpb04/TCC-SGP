/* eslint-disable camelcase */
import { uuid } from 'uuidv4';
import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO';
import IFindAllCategoriesDTO from '@modules/categories/dtos/IFindAllCategoriesDTO';
import Category from '../../infra/typeorm/entities/Category';

class FakeCategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  public async findById(id: string): Promise<Category | undefined> {
    const findCategory = this.categories.find(category => category.id === id);
    return findCategory;
  }

  public async findAllCategories(
    data: IFindAllCategoriesDTO,
  ): Promise<Category[]> {
    const categories = this.categories.filter(
      category => category.company_id === data.company_id,
    );
    return categories;
  }

  public async create({
    name,
    description,
    company_id,
  }: ICreateCategoryDTO): Promise<Category> {
    const categories = new Category();

    Object.assign(categories, { id: uuid(), name, description, company_id });

    this.categories.push(categories);

    return categories;
  }
}
export default FakeCategoriesRepository;
