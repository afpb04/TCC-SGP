import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

export default interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  findById(id: string): Promise<Category | undefined>;
}
