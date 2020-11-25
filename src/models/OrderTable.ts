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

import Order from './Orders';
import Table from './Table';

@Entity('orders_tables')
class OrderTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orders_id: string;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'orders_id' })
  order: Order;

  @Column()
  tables_id: string;

  @ManyToOne(() => Table)
  @JoinColumn({ name: 'tables_id' })
  table: Table;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default OrderTable;
