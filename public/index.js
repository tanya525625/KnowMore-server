//firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); //Пользовтаель будет считаться разлогиненным 
var isLog = firebase.auth().currentUser; //При закрытии всех вкладок
document.emailId = null;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (isLog != null ) {
      document.location.href = "/profile.html";
     // showProfile();
    }
      
    var user = firebase.auth().currentUser;
    if (user!=null){
      var email_id=user.email;
      //document.location.href = "/index.html"; 
    }
  } 
});


function login(){
  isLog = firebase.auth().currentUser;
  if (isLog==null)
  {
    isLog = 1;
    var userEmail = document.getElementById("email_field").value.toString();
    var userPass = document.getElementById("passw_field").value.toString();
    document.emailId = userEmail;
    // var email = {
    //   email: userEmail,
    // };
    
    setCookie('LoginCookie', userEmail, {path: '/', exrises: 100}); 
    //sendLogInfO(email);
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      if(error)
      {
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
      } 
      //sendLogInfO(email);
    });
  }
  else
  {
    window.alert("Allready logged in!" );
    document.location.href = "/profile.html";
  }
}

document.emailId = "Zubakhina";

// function test(){
//   return emailId;
//   //window.alert(emailId);
// }

function logout(){
  isLog = 0;
  firebase.auth().signOut();
  document.location.href = "/index.html";
}

function signup(){
  var userEmail = document.getElementById("email_field_sign").value.toString();
  var userPass = document.getElementById("passw_field_sign").value.toString();
  var userNick = document.getElementById("nick_field_sign").value.toString();
  var userSurname = document.getElementById("surname_field_sign").value.toString();
  var userName = document.getElementById("name_field_sign").value.toString();
  var points = 250;
  setCookie('LoginCookie', userEmail, {path: '/', exrises: 100}); 
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  });
  var user = {
    email: userEmail,
    nickname: userNick,
    surname: userSurname,
    name: userName,
    points: points
  };
  //include("db.js");
  //var userJSON = JSON.stringify(user);
  SendData(user);
  isLog = 1;
}

function SendData(user)
{
  $.ajax({
    url: "/api/user",
    type: "POST",
    data: JSON.stringify(user),
    contentType: "application/json",
    complete: 	function(data) {
      console.log(data.request); //в консоле браузера выводим json в параметре request
                                            //т.е. то что нам отправил сервер в ответ
        //console.log(data.request.name1);  //мы можем вывести какой-то параметр полученного json, например name1
    }
  });
}

// function sendLogInfO(email)
// {
//   $.ajax({
//     url: "/api/email",
//     type: "POST",
//     data: JSON.stringify(email),
//     contentType: "application/json",
//     success: function(data){
//       //console.log(data);
//       window.alert("success");
//       window.alert(data);
//       data = JSON.parse(data);
//       window.alert(data[0].name);
//   }
//   });
// }



// function SendProfile(user)
// {
//   $.ajax({
//     url: "/api/Profile",
//     type: "POST",
//     data: JSON.stringify(user),
//     contentType: "application/json",
//     complete: 	function(data) {
//       console.log(data.request); //в консоле браузера выводим json в параметре request                                    //т.е. то что нам отправил сервер в ответ
//                                 //мы можем вывести какой-то параметр полученного json, например name1   
//     }
//   });
  
//   //getting();
//   //showProfile(user);  
// }


// function getProfile(email){
//   $.ajax({
//     url: "/api/profile",
//     type: "POST",
//     data: JSON.stringify(email),
//     contentType: "application/json",
//     success: function(data){
//       console.log(data);
//       profile = data;
//       showProfile(profile);
//     }
//   });
// }


// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}
