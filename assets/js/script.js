//pseudocode
//create variables at the top
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");

var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
 
//create a score function

//highscore page
//todo: create a localstorage for the score element 
//localStorage.setItem("
//todo: create a highscore function
//todo: store the rank in local storage

//creating the questions array
//question 1
var question1 = [
document.textContent="question: 'Which is a function ?"
document.textContent= "function", true,
document.textContent= "method", false,
document.textContent= "variable", false,
document.textContent= "class", false,
]
//question 2
//question 3
//question 4


var function webquiz () {

//timer function
function countdown() {
    var timer = 76;
    var timeCount;
    /**this is the timer funtion which will start counting as soon as the quiz starts*/
    function setupTimer() {
        timeCount = setInterval(function () {
            timer--;
            var timeReset = timeElement.textContent = "Time:" + " " + timer;
           timer = timer;
            if (timer === 0) {         
                clearInterval(timeCount);
                textContent("Game Over!");
                timeElement.textContent = timeReset;
                 
            }
        }, 1000)
    }
     
//Start Questions

//keep score 

//reset

//Test Loop attached to timer 

//Next Question

//pull information from localstorage for high score


}