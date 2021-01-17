/* eslint-disable camelcase */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Table from '@modules/tables/infra/typeorm/entities/Table';
import OrderProduct from '@modules/ordersProducts/infra/typeorm/entities/OrderProduct';

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

  @ManyToOne(() => Table, table => table.orders)
  @JoinColumn({ name: 'table_id' })
  table: Table;

  @OneToMany(() => OrderProduct, orderProduct => orderProduct.order, {
    eager: true,
  })
  ordersProducts: OrderProduct[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
