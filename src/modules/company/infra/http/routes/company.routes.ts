import { Router } from 'express';
import CompaniesControler from '../controllers/CompaniesController';

const companiesRouter = Router();
const companiesControler = new CompaniesControler();

companiesRouter.post('/', companiesControler.create);
export default companiesRouter;
