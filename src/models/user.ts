import connection from './connection';

const create = (userData: [string, string, number, string]): Promise<void> => connection
  .execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
    userData,
  ).then();

/*
findAll
findOne
findByPk
update
destroy
*/

export default { create };
