import AppError from '@shared/errors/AppError';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
  it('Should be update new avatar a user', async () => {
    const fakeProductsRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const updateUserAvatar = new UpdateUserAvatarService(
      fakeProductsRepository,
      fakeStorageProvider,
    );

    const user = await fakeProductsRepository.create({
      name: 'Joe Doe',
      admin: true,
      email: 'exemplo@gmail.com',
      password: '11111',
      company_id: 'id',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'img.jpg',
    });
    expect(user.avatar).toBe('img.jpg');
  });

  it('Should no be able to update img from non existing user', async () => {
    const fakeProductsRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const updateUserAvatar = new UpdateUserAvatarService(
      fakeProductsRepository,
      fakeStorageProvider,
    );

    await expect(
      updateUserAvatar.execute({
        user_id: 'non-existing-user',
        avatarFilename: 'img.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('Should delete old img when updating new one', async () => {
    const fakeProductsRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeProductsRepository,
      fakeStorageProvider,
    );

    const user = await fakeProductsRepository.create({
      name: 'Joe Doe',
      admin: true,
      email: 'exemplo@gmail.com',
      password: '11111',
      company_id: 'id',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'img.jpg',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'img2.jpg',
    });
    expect(deleteFile).toHaveBeenCalledWith('img.jpg');
    expect(user.avatar).toBe('img2.jpg');
  });
});
