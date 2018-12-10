
const functions = require('firebase-functions');
var db = require('./db');
var fs = require('fs');

const express = require('express');
const server = express();

// const restify = require('restify'); 
// const server = restify.createServer(); 


server.use(
    function crossOrigin(req, res, next){
        res.header("Access-Cintrol-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

//server.use(restify.plugins.bodyParser());


server.get('/', function(req,res, next){ 
    console.log('/knowmore.. was called'); 
    res.writeHead(200, {"Content-Type":"text/html"});
    file = fs.createReadStream('index.html');
    file.pipe(res);
    return next();
}); 


//server.get('/static/*', restify.plugins.serveStatic({
   //directory: __dirname,
   // default: __dirname + '/index.js'
//}));

server.post('/api/user',
    function(req, res, next){
        console.log(req.body);
        var user = req.body;
        insertUser(user);
        res.sendStatus(200);
        res.end(JSON.stringify(user));
        next();
    });

server.post('/api/quest',
function(req, res, next){
    console.log(req.body);
    var quest = req.body;
    insertQuest(quest);
    res.sendStatus(200);
    //res.end(JSON.stringify(user));
    next();
});

server.post('/api/Profile',
    function(req, res, next){
    console.log(req.body);
    var user = req.body;
    //res.json(user);
    
    //res.sendStatus(200);
    res.send(JSON.stringify(user));
    
    next();
});

server.get('/questionsList', (req, res)=>{
    con.connect(function (err) {
        if (err )
            throw err
        con.query('use KnowMoreDB;', function (err, result, fields){ 
        if(err) 
            throw err;
    });
    var sql  = 'SELECT * FROM question';
    con.query(sql, function (err, result) {
        if (err){
            console.log(err);
        } else{
            console.log(result);
            res.json(result);
        }
    });
    });
});

server.get('/main.css', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/css"});
    file = fs.createReadStream('main.css');
    file.pipe(res);
    return next();
}); 

server.get('/getProfile.js', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/js"});
    file = fs.createReadStream('getProfile.js');
    file.pipe(res);
    return next();
}); 
server.get('/index.js', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/js"});
    file = fs.createReadStream('index.js');
    file.pipe(res);
    return next();
}); 

// server.get('/functions/index.js', function(req, res, next){ 
//     res.writeHead(200, {"Content-Type":"text/js"});
//     file = fs.createReadStream('index.js');
//     file.pipe(res);
//     return next();
// }); 

server.get('/test.js', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/js"});
    file = fs.createReadStream('functions/test.js');
    file.pipe(res);
    return next();
}); 


String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};


exports.server = functions.https.onRequest(server);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: '35.185.170.102',
  user: 'root',
  password: 'root'
});

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

 function insertUser(user) {
    con.connect(function (err) {
        if (err )
            throw err
        con.query('use KnowMoreDB;', function (err, result, fields){ 
        if(err) 
            throw err;
    });
    var values = Object.values(user);
    var sql  =`INSERT INTO user (${Object.keys(user).join(',')})` + 
                `VALUES (\'${values.slice(0, values.length - 1).join('\',\'')}\',` +
                user.points + ')' ;
    console.log(sql);

    con.query(sql, function (err, result) {
        console.log(err);
        
    });
    })
}

function insertQuest(quest){
    con.connect(function (err) {
        if (err )
            throw err
        con.query('use KnowMoreDB;', function (err, result, fields){ 
        if(err) 
            throw err;
    });
    var sql  =`INSERT INTO question (${Object.keys(quest).join(',')})` + 'VALUES (' + ' \' ' +
                quest.question +  ' \' '+ ',' +
                quest.pos_count + ',' + quest.neg_count + ','+ quest.isModerated +',' + quest.sphere_interest_area_quest_id +')' ;
    console.log(sql);

    con.query(sql, function (err, result) {
        console.log(err);
        
    });
    })
}
  
function giveAllQuestions(){
    con.connect(function (err) {
        if (err )
            throw err
        con.query('use KnowMoreDB;', function (err, result, fields){ 
        if(err) 
            throw err;
    });
    var sql  = 'SELECT * FROM question';
    con.query(sql, function (err, result) {
      console.log(err);
      console.log(result);
    } );
    })
  }

// server.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
//   });