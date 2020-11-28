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

import Order from './Order';
import Product from './Product';

@Entity('orders_products')
class OrderProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  totals: number;

  @Column()
  amount: number;

  @Column()
  orders_id: string;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'orders_id' })
  order: Order;

  @Column()
  products_id: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'products_id' })
  product: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default OrderProduct;
