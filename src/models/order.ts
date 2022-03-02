import connection from './connection';
import { OrderI } from '../interfaces';

const create = (order: [number]): Promise<void> => connection
  .execute('INSERT INTO Trybesmith.Orders (userId) VALUES (?);', order)
  .then();

const findAll = (): Promise<OrderI[]> => connection
  .execute('SELECT * FROM Trybesmith.Orders;')
  .then(([orders]) => orders as OrderI[]);

const findByPk = (id: number): Promise<OrderI> => connection
  .execute('SELECT * FROM Trybesmith.Orders WHERE id = ?', [id])
  .then(([data]) => data as OrderI[])
  .then(([order]) => order);

const findLast = (): Promise<OrderI> => connection
  .execute('SELECT * FROM Trybesmith.Orders ORDER BY id DESC LIMIT 1;')
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
  findLast,
};
