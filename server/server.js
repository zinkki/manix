const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 443;

const db = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.get('/api/list', (req, res) => {
	const sqlQuery = 'SELECT * FROM testDB.login';
	db.query(sqlQuery, (err, result) => {
		res.send(result);
		console.log(result);
		if(err) console.log(err);
	})
})

app.get('/api/portfolioList', (req, res) => {
	const sqlQuery = 'SELECT * FROM testDB.portfolio order by e_date desc';
	db.query(sqlQuery, (err, result) => {
		res.send(result);
		console.log(result);
		if(err) console.log(err);
	})
})

app.get('/api/adminList', (req, res) => {
	const sqlQuery = 'SELECT idx, e_title, write_stamp FROM testDB.portfolio';
	db.query(sqlQuery, (err, result) => {
		res.send(result);
		console.log(result);
		if(err) console.log(err);
	})
})

app.get('/api/idxList', (req,res) => {
	var idx = req.query.idx;
	const sqlQuery = 'SELECT * FROM testDB.portfolio WHERE idx=? ';
	db.query(sqlQuery, idx, (err, result) => {
		console.log('pofo info');
		res.send(result);
		if(err) { console.log(err) }
	})
})

app.post('/api/deletePofo', (req, res) => {
	var idx = req.body.idx;
	const sqlQuery = ' DELETE FROM testDB.portfolio WHERE idx=? ';
	db.query(sqlQuery, [idx], (err, result) => {
		console.log('delete--요청--');
		res.send(result);
		if(err) {console.log(err);}
	})
})
app.post('/api/updatePortfolio', (req,res) => {
	var date = req.body.date;
	var sub_title1 = req.body.sub_title1;
	var sub_contents1 = req.body.sub_contents1;
	var sub_title2 = req.body.sub_title2;
	var sub_contents2 = req.body.sub_contents2;
	var sub_title3 = req.body.sub_title3;
	var sub_contents3 = req.body.sub_contents3;
	var sub_title4 = req.body.sub_title4;
	var sub_contents4 = req.body.sub_contents4;
	var sub_title5 = req.body.sub_title5;
	var sub_contents5 = req.body.sub_contents5;
	var contents=req.body.contents;
	var idx= req.body.idx;
	const sqlQuery='UPDATE portfolio SET e_date=?, '+
	'sub_title1=?, sub_contents1=?, sub_title2=? ,sub_contents2=?, '+
	'sub_title3=?, sub_contents3=?, sub_title4=? ,sub_contents4=?, '+
	'sub_title5=?, sub_contents5=?, e_contents=? WHERE idx=?';
	db.query(sqlQuery,[date, sub_title1, sub_contents1, sub_title2, sub_contents2, 
		sub_title3, sub_contents3, sub_title4, sub_contents4,
		 sub_title5, sub_contents5,contents,idx], (err, result) => {
			console.log('Update------요청');
			res.send(result);
			if(err) console.log(err);
		 })
})


app.post('/api/insertPortfolio', (req, res) => {
	var title = req.body.title;
	var date = req.body.date;
	var sub_title1 = req.body.sub_title1;
	var sub_contents1 = req.body.sub_contents1;
	var sub_title2 = req.body.sub_title2;
	var sub_contents2 = req.body.sub_contents2;
	var sub_title3 = req.body.sub_title3;
	var sub_contents3 = req.body.sub_contents3;
	var sub_title4 = req.body.sub_title4;
	var sub_contents4 = req.body.sub_contents4;
	var sub_title5 = req.body.sub_title5;
	var sub_contents5 = req.body.sub_contents5;
	var sub_link_title = req.body.sub_link_title;
	var sub_link_adrs = req.body.sub_link_adrs;
	var pic1 =req.body.pic1;
	var pic2 = req.body.pic2;
	var pic3=req.body.pic3;
	var pic4=req.body.pic4;
	var pic5=req.body.pic5;
	var contents=req.body.contents;
	const sqlQuery = 'INSERT INTO testDB.portfolio'+
	'(e_title, e_date, sub_title1, sub_contents1, sub_title2, sub_contents2,'+
		 'sub_title3, sub_contents3, sub_title4, sub_contents4,'+
		'sub_title5, sub_contents5, sub_link_title, sub_link_adrs, pic1, pic2, pic3, pic4, pic5, e_contents)'+
	' VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	db.query(sqlQuery,[title, date, sub_title1, sub_contents1, sub_title2, sub_contents2, 
		sub_title3, sub_contents3, sub_title4, sub_contents4, sub_title5, sub_contents5,
		sub_link_title, sub_link_adrs, pic1, pic2, pic3, pic4, pic5, contents ], (err, result) => {
					console.log('Portfolio--Upload--Success!');
					res.send(result);
					if(err) {console.log(err);}
			})
})

app.listen(PORT, (req, res) => {
	console.log(`running on port ${PORT}`);
})