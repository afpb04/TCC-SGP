import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('CreateUser', () => {
  it('Should be able to create new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@doe.com',
      password: '123456',
      admin: true,
    });
    expect(user).toHaveProperty('id');
  });
  it('Should not be able to create a new user with same e-mail from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      admin: true,
    });
    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
        admin: true,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
