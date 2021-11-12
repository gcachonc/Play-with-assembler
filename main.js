var user = {
    username: ["Luis", "Marcel", "Juan", "Gonzalo"],
    score: ["2.831", "2.397", "2.627", "3.333"]
}
var startTime = "";
var finishTime = "";
var score = "";
let json = [];

window.onload = function() {
    if (localStorage.getItem("historic") !== null) {
        user = JSON.parse(localStorage.getItem("historic"));
    }
    var user1 = document.getElementById("user1");
    var score1 = document.getElementById("score1");
    var user2 = document.getElementById("user2");
    var score2 = document.getElementById("score2");
    var user3 = document.getElementById("user3");
    var score3 = document.getElementById("score3");
    var user4 = document.getElementById("user4");
    var score4 = document.getElementById("score4");
    var i = user.username.length - 1;
    /* put the reflex button in a random position*/
        // var img = document.getElementById ("page4");
        //         img.setAttribute("style", "position:absolute;");
        //         document.body.appendChild(img);
        //         var xy = getRandomPosition();
        //         img.style.top = xy[0] + '%';
        //         img.style.left = xy[1] + '%';

    user1.innerHTML = user.username[i];
    score1.innerHTML = user.score[i];
    user2.innerHTML = user.username[i - 1];
    score2.innerHTML = user.score[i - 1];
    user3.innerHTML = user.username[i -2];
    score3.innerHTML = user.score[i - 2];
    user4.innerHTML = user.username[i - 3];
    score4.innerHTML = user.score[i - 3];
}
/* change the pages in the game*/ 

const userButton = document.getElementById("userButton");
userButton.addEventListener("click", guardarUsuario);
var userName = "";

function guardarUsuario(){
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    userName = document.querySelector("#txtName").value;
    if (userName == ""){
        return;
    }

    user.username.push(document.getElementById("txtName").value);
    page1.className = "ocultar";
    page2.className = "mostrar";
    console.log(user.username);
    document.querySelector("#response").innerHTML = "Hello 👋 " +  userName;

}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);

function startGame(){
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");

    page2.className = "ocultar";
    page3.className = "mostrar";
    let randomTime = getRandomTime(1, 2);
    finishButton(randomTime);
    document.querySelector("#FingerText").innerHTML = "‼️" +  userName + "‼️";

}


const Botonrandom = document.getElementById("Botonrandom");
Botonrandom.addEventListener("click", launchGame);



function finishButton(time){
    timeout = setTimeout(function() {
        const page3 = document.getElementById("page3");
        const page4 = document.getElementById("page4");

        page3.className = "ocultar";
        page4.className = "mostrar";
        left.className = "ocultar";
        startTime = new Date;
        buttonPosition();
        var interval = window.setInterval(buttonPosition, 1000);
    }, time);
}
function buttonPosition(){
    var img = document.getElementById ("page4");
                img.setAttribute("style", "position:absolute;");
                document.body.appendChild(img);
                var xy = getRandomPosition();
                img.style.top = xy[0] + '%';
                img.style.left = xy[1] + '%';
}

function launchGame(){
    const page4 = document.getElementById("page4");
    const page5 = document.getElementById("page5");
    const left = document.getElementById("left");

    page4.className = "ocultar";
    page5.className = "mostrar";
    left.className = "mostrar";
    finishTime = new Date;
    var f1 = finishTime.getSeconds();
    var f2 = finishTime.getMilliseconds();
    var ft = f1 + "." + f2;
    var s1 = startTime.getSeconds();
    var s2 = startTime.getMilliseconds();
    var st = s1 + "." + s2;
    score = (parseFloat(ft) - parseFloat(st)).toFixed(3);
    document.querySelector("#Time").innerHTML = userName + " ,your time is... " + score;
}


/* get random time to display the page "get ready..."*/

function getRandomTime(min, max){
    let result = Math.floor((Math.random() * max) + min);
    result = result * 1000;
    return result;
}
/* get random  coordinates for the reflex button */
function getRandomPosition() {
	var randomX = Math.floor(Math.random()*60);
	var randomY = Math.floor(Math.random()*50);
	return [randomX,randomY];
}

/* store the value in localstorage of the user and the score*/

const playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click", addUsers);

function addUsers(){
    user.score.push(score);
    json = JSON.stringify(user);
    localStorage.setItem("historic",JSON.stringify(user));
    console.log(json);
    location.reload();
}


