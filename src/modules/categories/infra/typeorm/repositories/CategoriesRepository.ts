import { getRepository, Repository } from 'typeorm';
import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO';
import Category from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
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
