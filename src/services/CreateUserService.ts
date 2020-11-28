/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

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
    admin,
    company_id,
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email },
    });
    if (checkUserExists) {
      throw new Error('Email address already used.');
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
