/* eslint-disable camelcase */
import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CategoryController from '../controllers/CategoryController';

const categoriesRouter = Router();
const categoriesController = new CategoryController();

categoriesRouter.get('/:id', categoriesController.indexPublic);
categoriesRouter.use(ensureAuthenticated);
categoriesRouter.get('/', categoriesController.index);
categoriesRouter.post('/', categoriesController.create);
export default categoriesRouter;
