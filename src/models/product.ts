import connection from './connection';
import { ProductI } from '../interfaces';

const create = (product: [string, string]): Promise<void> => connection
  .execute('INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);', product)
  .then();

const findAll = () => connection
  .execute('SELECT * FROM Trybesmith.Products;')
  .then(([products]) => products as ProductI[]);

const findOne = (name: [string]) => connection
  .execute('SELECT id, name, amount FROM Trybesmith.Products WHERE name = ?', name)
  .then(([data]) => data as ProductI[])
  .then(([product]) => product);

const findByPk = (id: number) => connection
  .execute('SELECT * FROM Trybesmith.Products WHERE id = ?', [id])
  .then(([data]) => data as ProductI[])
  .then(([product]) => product);

/*
update
destroy
*/

export default {
  create,
  findAll,
  findOne,
  findByPk,
};
