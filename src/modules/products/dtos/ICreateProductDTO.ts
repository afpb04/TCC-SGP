/* eslint-disable camelcase */
export default interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
  img?: string;
  company_id: string;
  category_id: string;
}
