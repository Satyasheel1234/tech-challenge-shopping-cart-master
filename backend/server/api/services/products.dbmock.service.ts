import L from '../../common/logger';

let id = 1;
interface Product {
  id: number;
  name: string;
  customerPrice: number;
  cost: number;
}

// Prices in cents
const products: Product[] = [
  { id: id++, name: 'Soup', customerPrice: 199, cost: 82 },
  { id: id++, name: 'Bread', customerPrice: 87, cost: 21 },
  { id: id++, name: 'Cheese', customerPrice: 275, cost: 234 },
  { id: id++, name: 'Milk', customerPrice: 67, cost: 61 },
];

export class ProductsDbmockService {
  async all(): Promise<Product[]> {
    L.info(products, 'fetch all products');
    return Promise.resolve(products);
  }

  async byId(id: number): Promise<Product | void> {
    L.info(`fetch product with id ${id}`);
    const r = await this.all();
    try {
      return r[id - 1];
    } catch (e) {
      return undefined;
    }
  }

  async create(
    name: string,
    customerPrice: number,
    cost: number
  ): Promise<Product> {
    L.info(`create product with name ${name}`);
    const product: Product = {
      id: id++,
      name,
      customerPrice,
      cost,
    };
    products.push(product);
    return Promise.resolve(product);
  }
}

export default new ProductsDbmockService();
