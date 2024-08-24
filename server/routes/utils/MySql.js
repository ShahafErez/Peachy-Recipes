var mysql = require("mysql");
require("dotenv").config();

const config = {
  connectionLimit: 4,
  host: "localhost",
  user: "shahaf40",
  password: "Shahaf10",
  database: "mydb",
};
const pool = new mysql.createPool(config);

const connection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err);
      const query = (sql, binding) => {
        return new Promise((resolve, reject) => {
          connection.query(sql, binding, (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
      };
      const release = () => {
        return new Promise((resolve, reject) => {
          if (err) reject(err);
          resolve(connection.release());
        });
      };
      resolve({ query, release });
    });
  });
};
const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, binding, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
module.exports = { pool, connection, query };
