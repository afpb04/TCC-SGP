import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TablesController from '../controllers/TablesController';

const tablesRouter = Router();
const tablesController = new TablesController();
tablesRouter.use(ensureAuthenticated);

tablesRouter.get('/', tablesController.index);
tablesRouter.post('/', tablesController.create);
export default tablesRouter;
