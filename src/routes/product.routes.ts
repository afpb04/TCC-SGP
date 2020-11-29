/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';

import uploadConfig from '../config/upload';
import Product from '../models/Product';

import CreateProductService from '../services/CreateProductService';
import UpdateProductImgService from '../services/UpdateProductImgService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const productRouter = Router();
const upload = multer(uploadConfig);

productRouter.use(ensureAuthenticated);

productRouter.get('/', async (request, response) => {
  const productRepository = getRepository(Product);
  const products = await productRepository.find();
  return response.json(products);
});

productRouter.post('/', async (request, response) => {
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
});

productRouter.patch(
  '/img/:id',
  upload.single('img'),
  async (request, response) => {
    const product_id = request.params.id;
    const updateProductImg = new UpdateProductImgService();
    const product = await updateProductImg.execute({
      product_id,
      imgFilename: request.file.filename,
    });
    return response.json(product);
  },
);
export default productRouter;
