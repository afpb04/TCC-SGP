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

import Order from '@modules/orders/infra/typeorm/entities/Order';
import Product from '@modules/products/infra/typeorm/entities/Product';

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

  @ManyToOne(() => Order, order => order.ordersProducts)
  @JoinColumn({ name: 'orders_id' })
  order: Order;

  @Column()
  products_id: string;

  @ManyToOne(() => Product, {
    eager: true,
  })
  @JoinColumn({ name: 'products_id' })
  product: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default OrderProduct;
