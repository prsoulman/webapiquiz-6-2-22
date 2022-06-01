//pseudocode
//create variables at the top
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var q = 0;

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
var Questions = [
{
    text:'question 1',
    choices:['a','b','c','d'],
    answer:'a'
},
{
    text:'question 2',
    choices:['a','b','c','d'],
    answer:'c'
},
{
    text:'question 3',
    choices:['a','b','c','d'],
    answer:'b'
},
{
    text:'question 4',
    choices:['a','b','c','d'],
    answer:'d'
},
{
    text:'question 5',
    choices:['a','b','c','d'],
    answer:'b'
},
]
//question 2
//question 3
//question 4


function webquiz () {
    var questionEl = document.getElementById('question-text');
    questionEl.textContent = Questions[q].text;
    var answerDiv = document.querySelector('.answers');
    Questions[q].choices.forEach(function(choice){
        console.log(choice)
    var button = document.createElement('button');
    button.setAttribute('class', 'btn');
    button.textContent = choice;
    button.setAttribute('value', choice);
    button.onclick = function(){
        console.log(this);
        console.log(this.value);
    }
    answerDiv.appendChild(button);
    
    })

}

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
}     
//Start Questions

//keep score 

//reset

//Test Loop attached to timer 

//Next Question

//pull information from localstorage for high score
startButton.addEventListener('click', function(){
    document.querySelector('.start-div').classList.add('hide');
    document.querySelector('.question-card').classList.remove('hide');
    webquiz();
})
