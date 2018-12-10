$(document).ready ( function (){
    window.alert("getting");

    //while (obj == null)
    //{
        $.get("/api/Profile", function(obj){
        var userObj = JSON.parse(obj);
        window.alert(userObj.email);
        })
    //} 
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
