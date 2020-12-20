import FakeCategoriesRepository from '../repositories/fakes/FakeCategoriesRepository';
import CreateCategoryService from './CreateCategoryService';

describe('CreateCategory', () => {
  it('Should be able to create new category', async () => {
    const fakeCategoryRepository = new FakeCategoriesRepository();
    const createCategory = new CreateCategoryService(fakeCategoryRepository);

    const category = await createCategory.execute({
      name: 'pizza',
      description: 'pizza em geral',
      company_id: 'company-id',
    });
    expect(category).toHaveProperty('id');
  });
});
