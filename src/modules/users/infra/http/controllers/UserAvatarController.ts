/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateProductImgService from '@modules/users/services/UpdateUserAvatarService';
import { classToClass } from 'class-transformer';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateProductImgService);
    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });
    return response.json(classToClass(user));
  }
}
