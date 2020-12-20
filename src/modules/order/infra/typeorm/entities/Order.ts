/* eslint-disable camelcase */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Table from '@modules/table/infra/typeorm/entities/Table';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totals: number;

  @Column()
  isfinished: boolean;

  @Column()
  table_id: string;

  @ManyToOne(() => Table)
  @JoinColumn({ name: 'table_id' })
  table: Table;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
