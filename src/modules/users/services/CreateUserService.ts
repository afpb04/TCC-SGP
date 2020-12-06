/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '@modules/users/infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  company_id: string;
}
class CreateUserService {
  public async execute({
    name,
    email,
    password,
    admin = true,
    company_id,
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email },
    });
    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      admin,
      company_id,
    });
    await userRepository.save(user);

    return user;
  }
}
export default CreateUserService;
