/* eslint-disable camelcase */
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProductImgController from '../controllers/ProductImgController';
import ProductsController from '../controllers/ProductsController';

const productRouter = Router();
const productsController = new ProductsController();
const productImgCOntroller = new ProductImgController();
const upload = multer(uploadConfig);

productRouter.get('/public/:company_id', productsController.indexPlublic);

productRouter.use(ensureAuthenticated);

productRouter.post('/', productsController.create);

productRouter.get('/', productsController.index);

productRouter.get('/:id', productsController.show);

productRouter.patch(
  '/img/:id',
  upload.single('img'),
  productImgCOntroller.update,
);
export default productRouter;
