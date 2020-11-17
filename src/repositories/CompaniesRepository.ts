import { EntityRepository, Repository } from 'typeorm';

import Companies from '../models/Company';

@EntityRepository(Companies)
class CompaniesRepository extends Repository<Companies> {}

export default CompaniesRepository;
