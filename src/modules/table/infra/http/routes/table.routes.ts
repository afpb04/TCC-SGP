import { Router } from 'express';
import TablesController from '../controllers/TablesController';

const tablesRouter = Router();
const tablesController = new TablesController();

tablesRouter.post('/', tablesController.create);
export default tablesRouter;
