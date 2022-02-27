import connection from './connection';
import { ProductI } from '../interfaces';

const create = (product: [string, string]): Promise<void> => connection
  .execute('INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);', product)
  .then();

const findAll = () => connection
  .execute('SELECT id, productname, classe, level FROM Trybesmith.Products;')
  .then(([products]) => products as ProductI[]);

const findOne = (name: [string]) => connection
  .execute('SELECT id, name, amount FROM Trybesmith.Products WHERE name = ?', name)
  .then(([data]) => data as ProductI[])
  .then(([product]) => product);

/*
findAll
findOne
findByPk
update
destroy
*/

export default {
  create,
  findAll,
  findOne,
};
