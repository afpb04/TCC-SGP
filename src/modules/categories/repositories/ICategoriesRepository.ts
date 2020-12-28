/* eslint-disable camelcase */
import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import IFindAllCategoriesDTO from '../dtos/IFindAllCategoriesDTO';

export default interface ICategoriesRepository {
  findAllCategories(data: IFindAllCategoriesDTO): Promise<Category[]>;
  create(data: ICreateCategoryDTO): Promise<Category>;
  findById(id: string): Promise<Category | undefined>;
}
