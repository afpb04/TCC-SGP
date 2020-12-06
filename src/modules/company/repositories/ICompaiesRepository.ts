import Company from '../infra/typeorm/entities/Company';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';

export default interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  show(): Promise<Company[]>;
}
