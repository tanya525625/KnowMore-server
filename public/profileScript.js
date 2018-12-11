$(document).ready ( function (){
    var cookieEmail = getCookie ('LoginCookie');
    var email = {
        email: cookieEmail,
      };
    $.ajax({
        url: "/api/email",
        type: "POST",
        data: JSON.stringify(email),
        contentType: "application/json",
        success: function(data){
          data = JSON.parse(data);
          showProfile(data);
      }
      });
});

function SendQuest()
{
    var quest = document.getElementById("quest_field").value.toString();
    var countPos = 0;
    var countNeg = 0;
    var isModerated = 0;
    var subject = 1;
    var questJSON = {
        question: quest,
        pos_count: countPos,
        neg_count: countNeg,
        isModerated: isModerated,
        sphere_interest_area_quest_id: subject
      };
    $.ajax({
        url: "/api/quest",
        type: "POST",
        data: JSON.stringify(questJSON),
        contentType: "application/json",
        complete: 	function(data) {
        console.log(data.request); //в консоле браузера выводим json в параметре request
                                                //т.е. то что нам отправил сервер в ответ
            //console.log(data.request.name1);  //мы можем вывести какой-то параметр полученного json, например name1
        }
    });
}
 
function showProfile(profile){
    var newName = profile[0].name;
    var newSurname = profile[0].surname;
    var newNickname = profile[0].nickname;
    var newPoints = parseInt(profile[0].points);
    document.getElementById('surname').innerHTML = newSurname;
    document.getElementById('nick').innerHTML = newNickname;
    document.getElementById('score').innerHTML = newPoints;
    document.getElementById('name').innerHTML = newName;
}
  
function directQuest(){
    document.location.href = "/questions.html";
 }

