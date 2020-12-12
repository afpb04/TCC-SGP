/* eslint-disable camelcase */
export default interface ICreateUsersDTO {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  company_id?: string;
}
