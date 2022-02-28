import connection from './connection';
import { OrderI } from '../interfaces';

const create = (order: [number]): Promise<void> => connection
  .execute('INSERT INTO Trybesmith.Orders (userId) VALUES (?);', order)
  .then();

const findAll = () => connection
  .execute('SELECT * FROM Trybesmith.Orders;')
  .then(([orders]) => orders as OrderI[]);

const findByPk = (id: number) => connection
  .execute('SELECT * FROM Trybesmith.Orders WHERE id = ?', [id])
  .then(([data]) => data as OrderI[])
  .then(([order]) => order);

/*
findOne
update
destroy
*/

export default {
  create,
  findAll,
  findByPk,
};
