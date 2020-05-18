"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class MySQL {
    constructor() {
        this.conectado = false;
        this.cnn = mysql_1.default.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db',
        });
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static query(query, callback) {
        this._instance.cnn.query(query, function (error, results, fields) {
            callback(error, results, fields);
        });
    }
}
exports.default = MySQL;
