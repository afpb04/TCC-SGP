/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateProductImgService from '@modules/products/services/UpdateProductImgService';

export default class ProductImgController {
  public async update(request: Request, response: Response): Promise<Response> {
    const product_id = request.params.id;
    const updateProductImg = container.resolve(UpdateProductImgService);
    const product = await updateProductImg.execute({
      product_id,
      imgFilename: request.file.filename,
    });
    return response.json(product);
  }
}
