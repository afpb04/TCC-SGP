/* eslint-disable camelcase */
import Company from '../infra/typeorm/entities/Company';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';

export default interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  findByCNPJ(cnpj: string): Promise<Company | undefined>;
  findById(company_id: string): Promise<Company | undefined>;
}
