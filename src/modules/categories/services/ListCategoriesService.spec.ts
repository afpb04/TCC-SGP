import FakeCategoriesRepository from '@modules/categories/repositories/fakes/FakeCategoriesRepository';
import ListCategoriesService from './ListCategoriesService';

let fakeCategoriesRepository: FakeCategoriesRepository;
let listCategories: ListCategoriesService;

describe('listCategory', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();

    listCategories = new ListCategoriesService(fakeCategoriesRepository);
  });

  it('should be able to list the categories', async () => {
    const category = await fakeCategoriesRepository.create({
      company_id: 'empresa-id',
      name: 'pizza',
      description: 'pizza em geral',
    });
    const category1 = await fakeCategoriesRepository.create({
      company_id: 'empresa-id',
      name: 'Hamburguer',
      description: 'Hamburguer em geral',
    });
    await fakeCategoriesRepository.create({
      company_id: 'empresa-id-01',
      name: 'pizza',
      description: 'pizza em geral',
    });

    const categories = await listCategories.execute({
      company_id: 'empresa-id',
    });

    expect(categories).toEqual([category, category1]);
  });
});
