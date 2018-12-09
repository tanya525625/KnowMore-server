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
    con.query(sql, function (err, result) {
        console.log(err);
    });
    })
    con.end();
}
  