/* eslint-disable camelcase */
import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const categoriesRouter = Router();
const categoriesController = new CategoryController();

categoriesRouter.post('/', categoriesController.create);
export default categoriesRouter;
