import mysql from "mysql";
class DB {
  // @ts-ignore
  static _instance;
  constructor() {
    // @ts-ignore
    this.connection = mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
  }
  // @ts-ignore
  query(query) {
    return new Promise(function (resolve, reject) {
      // @ts-ignore
      DB.getInstance().connection.query(query, function (error, results) {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }
  static getInstance() {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new DB();
    return this._instance;
  }
}

export default DB;
