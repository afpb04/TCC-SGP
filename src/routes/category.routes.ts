/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import Category from '../models/Category';

import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.get('/', async (resquet, response) => {
  const categoriesRepository = getRepository(Category);
  const categories = await categoriesRepository.find();

  return response.json(categories);
});

categoriesRouter.post('/', async (request, response) => {
  const { name, description, company_id } = request.body;

  const createCategory = new CreateCategoryService();

  const category = await createCategory.execute({
    name,
    description,
    company_id,
  });
  return response.json(category);
});
export default categoriesRouter;
