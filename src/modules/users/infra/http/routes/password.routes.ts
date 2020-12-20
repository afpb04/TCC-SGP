/* eslint-disable camelcase */
import { Router } from 'express';
import ForgotPasswoldController from '../controllers/ForgotPasswoldController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswoldController = new ForgotPasswoldController();
const resetPasswordController = new ResetPasswordController();
passwordRouter.post('/forgot', forgotPasswoldController.create);
passwordRouter.post('/reset', resetPasswordController.create);
export default passwordRouter;
