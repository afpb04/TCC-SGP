/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import Delivery from '@modules/delivery/infra/typeorm/entities/Delivery';

interface Request {
  address: string;
  isdelivery: boolean;
  company_id: string;
}
class CreateDeliveryService {
  public async execute({
    address,
    isdelivery,
    company_id,
  }: Request): Promise<Delivery> {
    const deliveryRepository = getRepository(Delivery);

    const delivery = deliveryRepository.create({
      address,
      isdelivery,
      company_id,
    });
    return delivery;
  }
}

export default CreateDeliveryService;
