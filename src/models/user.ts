import connection from './connection';

const create = async (userData: [string, string, number, string]): Promise<void> => {
  await connection.execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
    userData,
  );
};

/*
findAll
findOne
findByPk
update
destroy
*/

export default { create };
