import { container } from 'tsyringe';

import IStorageProvaider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvaider>(
  'StorageProvider',
  DiskStorageProvider,
);
