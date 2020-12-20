/* eslint-disable camelcase */
export default interface ICreateOrderProductDTO {
  price: number;
  totals: number;
  amount: number;
  orders_id: string;
  products_id: string;
}
