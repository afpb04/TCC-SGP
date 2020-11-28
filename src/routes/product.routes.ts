/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import Product from '../models/Product';
import CreateProductService from '../services/CreateProductService';

const productRouter = Router();

productRouter.get('/', async (request, response) => {
  const productRepository = getRepository(Product);
  const products = await productRepository.find();
  return response.json(products);
});

productRouter.post('/', async (request, response) => {
  try {
    const { name, description, price, company_id, category_id } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      description,
      price,
      company_id,
      category_id,
    });
    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
export default productRouter;
