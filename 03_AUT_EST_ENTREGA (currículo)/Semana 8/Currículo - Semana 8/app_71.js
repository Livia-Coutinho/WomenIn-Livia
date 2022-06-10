const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';


const port = 3020;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'db_cv.db';


app.use(express.static("../frontend/"));


app.use(express.json());


/* Definição dos endpoints */

/****** CRUD ******************************************************************/
app.get('/teste', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT id,lingua,nivel FROM idiomas ORDER BY id COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

/* Definição dos endpoints */
app.get('/', (req, res) => {
    var resultado = "";
    //var ordem = 'title';
    res.statusCode = 200;
    //console.log("aqui" + req.query.order);
    res.setHeader('Access-Control-Allow-Origin', '*');
    //if(req.query.order) ordem = req.query.order;
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT id,lingua,nivel FROM idiomas ORDER BY id COLLATE NOCASE';
    console.log(sql);
    db.serialize(function () {
      db.each(sql,
        function (erruserId, row) {
          //console.log(row. + ': ' + row.title);
          resultado += '<div class="linha">' + row.id + '</span> | ' + row.lingua + '</div>\n';
          console.log(resultado);
        });
    });
    
    res.write('<!DOCTYPE html> \n<meta charset="UTF-8">\n<head> \n\t<title>Etapa 0 - LISTAGEM DE USUÁRIOS</title><style>.linha { border-bottom: solid 1px black;}</style>\n</head> \
  \n<body> \
   \n\t<div id="main"> \
       \n\t\t<h1> MEU CURRÍCULO </h1>');
    res.write('\n\t\t<div class="linha">' + resultado + '</div> \n\t</div>');
    res.write(resultado);
    res.write('\n</body> \n</html>');
    res.end();
    resultado = "";
  });


// Retorna todos registros (é o R do CRUD - Read)
app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT id,lingua,nivel FROM idiomas ORDER BY id COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	console.log(req.body);
    sql = `INSERT INTO idiomas (lingua,nivel) VALUES ("${req.body.lingua}", "${req.body.nivel}")`;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "UPDATE idiomas SET nivel = '" + req.body.nivel + "' WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "DELETE FROM idiomas WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});