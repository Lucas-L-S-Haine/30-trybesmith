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

const findOne = (loginData: [string, string]) => connection
  .execute(`SELECT id, username, classe, level FROM Trybesmith.Users
    WHERE username = ? AND password = ?`, loginData)
  .then(([data]) => data as UserI[])
  .then(([user]) => user);

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
