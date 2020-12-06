/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateUserService from '@modules/users/services/CreateUserService';
import User from '../../typeorm/entities/User';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);
  const users = await usersRepository.find();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { name, email, password, admin, company_id } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
    admin,
    company_id,
  });

  return response.json(user);
});
export default usersRouter;
