/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import { classToClass } from 'class-transformer';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin, company_id } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
      admin,
      company_id,
    });

    return response.json(classToClass(user));
  }
}
