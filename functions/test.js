// var userEmail = "tanya_postcrossing@mail.ru";

// var user = {
//     email: userEmail,
//   };

// function showProfile(userJson){
//     var newData = JSON.stringify(userJson)
//     var userObj = JSON.parse(newData);
//     console.log(userObj.email);
// }

// showProfile(user);

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

res = giveAllQuestions();
//console.log(res);