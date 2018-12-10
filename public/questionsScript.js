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
    window.alert("We are here!!!");
    window.alert(questions[1].question);
}

function directProfile(){
    document.location.href = "/profile.html";
}