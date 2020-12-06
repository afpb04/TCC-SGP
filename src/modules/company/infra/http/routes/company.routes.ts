import { Router } from 'express';
import CompaniesControler from '../Controllers/CompaniesController';

const companiesRouter = Router();
const companiesControler = new CompaniesControler();

companiesRouter.post('/', companiesControler.create);
export default companiesRouter;
