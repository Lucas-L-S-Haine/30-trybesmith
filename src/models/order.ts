import connection from './connection';
import { OrderI } from '../interfaces';

const create = (order: [string, string, number, string]): Promise<void> => connection
  .execute(
    'INSERT INTO Trybesmith.Orders (ordername, classe, level, password) VALUES (?, ?, ?, ?);',
    order,
  ).then();

const findAll = () => connection
  .execute('SELECT id, ordername, classe, level FROM Trybesmith.Orders;')
  .then(([orders]) => orders as OrderI[]);

const findByPk = (id: number) => connection
  .execute('SELECT * FROM Trybesmith.Orders WHERE id = ?', [id])
  .then(([data]) => data as OrderI[])
  .then(([order]) => order);

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
  findByPk,
};
