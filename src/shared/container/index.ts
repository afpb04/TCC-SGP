import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ICompaniesRepository from '@modules/company/repositories/ICompaiesRepository';
import CompaniesRepository from '@modules/company/infra/typeorm/repositories/CompaniesRepository';

import IProductsRepository from '@modules/product/repositories/IProductsRepository';
import ProductsRepository from '@modules/product/infra/typeorm/repositories/ProductsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
