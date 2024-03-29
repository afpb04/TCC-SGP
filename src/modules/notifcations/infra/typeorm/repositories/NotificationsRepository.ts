/* eslint-disable camelcase */
import { getMongoRepository, MongoRepository } from 'typeorm';
import INotificationsRepository from '@modules/notifcations/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifcations/dtos/ICreateNotificationDTO';

import Notification from '../schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      content,
      recipient_id,
    });
    this.ormRepository.save(notification);
    return notification;
  }
}
export default NotificationsRepository;
