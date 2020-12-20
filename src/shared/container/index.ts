import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UsersTokensRepository from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';

import ICompaniesRepository from '@modules/company/repositories/ICompaiesRepository';
import CompaniesRepository from '@modules/company/infra/typeorm/repositories/CompaniesRepository';

import IProductsRepository from '@modules/product/repositories/IProductsRepository';
import ProductsRepository from '@modules/product/infra/typeorm/repositories/ProductsRepository';

import ITablesRepository from '@modules/table/repositories/ITablesRepository';
import TablesRepository from '@modules/table/infra/typeorm/repositories/TablesRepository';

import ICategoriesRepository from '@modules/category/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/category/infra/typeorm/repositories/CategoriesRepository';

import IOrdersRepository from '@modules/order/repositories/IOrdersRepository';
import OrdersRepository from '@modules/order/infra/typeorm/repositories/OrdersRepository';

import IOrderProductRepository from '@modules/orderProduct/repositories/IOrderProductRepository';
import OrdersProductsRepository from '@modules/orderProduct/infra/typeorm/repositories/OrdersProductsRepository';

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
