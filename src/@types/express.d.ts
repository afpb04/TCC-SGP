/* eslint-disable camelcase */
declare namespace Express {
  export interface Request {
    user: {
      id: string;
      admin: boolean;
      company_id: string;
    };
  }
}
