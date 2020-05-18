import mysql from 'mysql';

export default class MySQL {
	private static _instance: MySQL;
	cnn: mysql.Pool;
	conectado: boolean = false;
	constructor() {
		this.cnn = mysql.createPool({
			connectionLimit: 10,
			host: 'localhost',
			user: 'node_user',
			password: '123456',
			database: 'node_db',
		});
	}

	public static get instance() {
		return this._instance || (this._instance = new this());
	}

	static query(query: string, callback: Function) {
		this._instance.cnn.query(query, function (error, results, fields) {
			callback(error, results, fields);
		});
	}
}
