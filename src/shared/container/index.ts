import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UsersTokensRepository from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';

import ICompaniesRepository from '@modules/companies/repositories/ICompaiesRepository';
import CompaniesRepository from '@modules/companies/infra/typeorm/repositories/CompaniesRepository';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import ITablesRepository from '@modules/tables/repositories/ITablesRepository';
import TablesRepository from '@modules/tables/infra/typeorm/repositories/TablesRepository';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository';

import IOrderProductRepository from '@modules/ordersProducts/repositories/IOrderProductRepository';
import OrdersProductsRepository from '@modules/ordersProducts/infra/typeorm/repositories/OrdersProductsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<IUserTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);
container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<ITablesRepository>(
  'TablesRepository',
  TablesRepository,
);
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
container.registerSingleton<IOrderProductRepository>(
  'OrdersProductsRepository',
  OrdersProductsRepository,
);
