var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.185.170.102",
  user: "root",
  password: "root"
});

/*con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("use KnowMoreDB;", function (err, result, fields){});
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/
