"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = `
	SELECT * 
	FROM 
	heroes
	`;
    mysql_1.default.query(query, (err, heroes, fields) => {
        if (err)
            throw err;
        res.json({
            ok: true,
            heroes,
        });
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    const scapedId = mysql_1.default.instance.cnn.escape(id);
    const query = `
	SELECT * 
	FROM 
	heroes
	where id = ${scapedId}
	`;
    mysql_1.default.query(query, (err, heroe, fields) => {
        if (err)
            throw err;
        res.json({
            ok: true,
            heroe,
        });
    });
});
exports.default = router;
