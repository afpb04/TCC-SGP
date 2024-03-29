/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';
import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO';
import IFindAllCategoriesDTO from '@modules/categories/dtos/IFindAllCategoriesDTO';
import Category from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findAllCategories({
    company_id,
  }: IFindAllCategoriesDTO): Promise<Category[]> {
    const categories = await this.ormRepository.find({
      where: { company_id },
    });
    return categories;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne(id);
    return category;
  }

  public async create(categotyData: ICreateCategoryDTO): Promise<Category> {
    const category = await this.ormRepository.create(categotyData);
    await this.ormRepository.save(category);
    return category;
  }
}
export default CategoriesRepository;
