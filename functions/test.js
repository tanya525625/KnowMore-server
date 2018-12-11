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

con.connect(function (err) {
  if (err )
      throw err;
  
})

var email = {
  email: "tanya@mail.ru",
};


var newEmail = JSON.stringify(email);
newEmail = JSON.parse(newEmail);
console.log(newEmail.email);