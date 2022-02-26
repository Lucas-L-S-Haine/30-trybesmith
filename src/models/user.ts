import connection from './connection';
import { UserI } from '../interfaces';

const create = (userData: [string, string, number, string]): Promise<void> => connection
  .execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
    userData,
  ).then();

const findAll = () => connection
  .execute('SELECT id, username, classe, level FROM Trybesmith.Users;')
  .then(([users]) => users as UserI[]);

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
