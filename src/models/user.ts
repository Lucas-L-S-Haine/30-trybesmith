import connection from './connection';

const create = async (userData: [string, string, number, string]) => {
  connection.execute(
    'INSTERT INTO Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
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
