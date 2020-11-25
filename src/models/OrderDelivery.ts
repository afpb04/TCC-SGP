/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Delivery from './Delivery';
import Order from './Orders';

@Entity('orders_deliveries')
class OrderDelivery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orders_id: string;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'orders_id' })
  order: Order;

  @Column()
  deliveries_id: string;

  @ManyToOne(() => Delivery)
  @JoinColumn({ name: 'deliveries_id' })
  delivery: Delivery;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default OrderDelivery;
