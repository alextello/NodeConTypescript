import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
	const query = `
	SELECT * 
	FROM 
	heroes
	`;
	MySQL.query(query, (err: any, heroes: any, fields: any) => {
		if (err) throw err;
		res.json({
			ok: true,
			heroes,
		});
	});
});

router.get('/heroes/:id', (req: Request, res: Response) => {
	const id = req.params.id;
	const scapedId = MySQL.instance.cnn.escape(id);
	const query = `
	SELECT * 
	FROM 
	heroes
	where id = ${scapedId}
	`;
	MySQL.query(query, (err: any, heroe: any, fields: any) => {
		if (err) throw err;
		res.json({
			ok: true,
			heroe,
		});
	});
});

export default router;
