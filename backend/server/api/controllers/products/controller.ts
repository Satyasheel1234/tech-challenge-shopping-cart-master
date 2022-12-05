import ProductsService from '../../services/products.dbmock.service';
import { Request, Response } from 'express';

export class Controller {
  async all(req: Request, res: Response): Promise<void> {
    res.json(await ProductsService.all());
  }

  async byId(req: Request, res: Response): Promise<void> {
    const id = Number.parseInt(req.params['id']);
    const r = await ProductsService.byId(id);
    if (r) res.json(r);
    else res.status(404).end();
  }

  async create(req: Request, res: Response): Promise<void> {
    const { name, customerPrice, cost } = req.body;
    const r = await ProductsService.create(name, customerPrice, cost);
    res.status(201).location(`/api/v1/product/${r.id}`).json(r);
  }
}
export default new Controller();
