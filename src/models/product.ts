import connection from './connection';
import { ProductI } from '../interfaces';

const create = (product: [string, string]): Promise<void> => connection
  .execute('INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);', product)
  .then();

const findAll = (): Promise<ProductI[]> => connection
  .execute('SELECT * FROM Trybesmith.Products;')
  .then(([products]) => products as ProductI[]);

const findOne = (name: [string]): Promise<ProductI> => connection
  .execute('SELECT id, name, amount FROM Trybesmith.Products WHERE name = ?', name)
  .then(([data]) => data as ProductI[])
  .then(([product]) => product);

const findByPk = (id: number): Promise<ProductI> => connection
  .execute('SELECT * FROM Trybesmith.Products WHERE id = ?', [id])
  .then(([data]) => data as ProductI[])
  .then(([product]) => product);

const update = (orderId: number, productIds: number[]): Promise<void> => connection
  .execute('UPDATE Trybesmith.Products SET orderId = ? WHERE id in (?);', [orderId, productIds])
  .then();

/*
update
destroy
*/

export default {
  create,
  findAll,
  findOne,
  findByPk,
  update,
};
