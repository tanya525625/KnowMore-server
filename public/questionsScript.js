$(document).ready ( function (){
    $.ajax({
        type: "GET",
        url:'/questionsList',
        dataType:"json",
        success: function(data){
            console.log(data);
            questions = data;
            ShowQuestions(questions);
        }
    });
});

function ShowQuestions(questions){
    //window.alert("We are here!!!");
    //window.alert(questions[1].question);
    for (var i=0; i<questions.length; i++) {
        var list = '<p>'+ questions[i].question + '</p>';
        document.getElementById('questionField').innerHTML += list;
    }
}

function directProfile(){
    document.location.href = "/profile.html";
}