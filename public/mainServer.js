var db = require('./db');
const restify = require('restify'); 
var fs = require('fs');
const server = restify.createServer({ 
name: 'My server App', 
version: '1.0.0' 
}); 



server.use(
    function crossOrigin(req, res, next){
        res.header("Access-Cintrol-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.use(restify.plugins.bodyParser());


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
        db.insertUser(user);
        res.send(200);
        res.end();
        next();
    });

server.get('/main.css', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/css"});
    file = fs.createReadStream('main.css');
    file.pipe(res);
    return next();
}); 
server.get('/mainClient.js', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/js"});
    file = fs.createReadStream('main.Client.js');
    file.pipe(res);
    return next();
}); 
server.get('/index.js', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/js"});
    file = fs.createReadStream('index.js');
    file.pipe(res);
    return next();
}); 
server.get('/test.js', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/js"});
    file = fs.createReadStream('test.js');
    file.pipe(res);
    return next();
}); 


server.listen(3302, 
()=>console.log('Server UP!'));

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};



 /*function insertUser(user) {
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
    
    con.query(sql, function (err, result) {
        console.log(err);
    });
    });
    con.end();
}*/



