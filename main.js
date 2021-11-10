var user = {
    username: ["Luis", "Marcel", "Juan", "Gonzalo"],
    score: ["28", "23", "25", "33"]
}

window.onload = function() {
    var user1 = document.getElementById("user1");
    var score1 = document.getElementById("score1");
    var user2 = document.getElementById("user2");
    var score2 = document.getElementById("score2");
    var user3 = document.getElementById("user3");
    var score3 = document.getElementById("score3");
    var user4 = document.getElementById("user4");
    var score4 = document.getElementById("score4");
    var i = user.username.length - 1;

    user1.innerHTML = user.username[i];
    score1.innerHTML = user.score[i];
    user2.innerHTML = user.username[i - 1];
    score2.innerHTML = user.score[i - 1];
    user3.innerHTML = user.username[i -2];
    score3.innerHTML = user.score[i - 2];
    user4.innerHTML = user.username[i - 3];
    score4.innerHTML = user.score[i - 3];

}

const userButton = document.getElementById("userButton");
userButton.addEventListener("click", guardarUsuario);

function guardarUsuario(){
    user.username.push(document.getElementById("userName").value);
}

function next() {
    var userName = document.querySelector("#txtName").value;
    document.querySelector("#response").innerHTML = "Hello 👋 " +  userName +" these are the rules... ";
  }