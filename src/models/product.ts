import connection from './connection';
import { ProductI } from '../interfaces';

const create = (product: [string, string, number, string]): Promise<void> => connection
  .execute(
    'INSERT INTO Trybesmith.Products (productname, classe, level, password) VALUES (?, ?, ?, ?);',
    product,
  ).then();

const findAll = () => connection
  .execute('SELECT id, productname, classe, level FROM Trybesmith.Products;')
  .then(([products]) => products as ProductI[]);

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
};
