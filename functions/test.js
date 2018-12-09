var userEmail = "tanya_postcrossing@mail.ru";

var user = {
    email: userEmail,
  };

function showProfile(userJson){
    var newData = JSON.stringify(userJson)
    var userObj = JSON.parse(newData);
    console.log(userObj.email);
}

showProfile(user);