//pseudocode
//create variables at the top
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var displayTimer = document.querySelector(".correctish");
var answersEl = document.querySelector('question-card hide');
var q = 0;

var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


//highscore page
//todo: create a localstorage for the score element 
//localStorage.setItem("
//todo: create a highscore function
//todo: store the rank in local storage

//creating the questions array
//question 1
var Questions = [
{
    text:'What number does an index start with?',
    choices:['a-0','b-1','c-3','d-4'],
    answer:'a'
},
//question 2
{
    text:'How do you make global style changes in CSS',
    choices:['not possible','--global','Global;','*'],
    answer:'c'
},
//question 3
{
    text:'question 3',
    choices:['a','b','c','d'],
    answer:'b'
},
//question 4
{
    text:'question 4',
    choices:['a','b','c','d'],
    answer:'d'
},
//question 5
{
    text:'question 5',
    choices:['a','b','c','d'],
    answer:'b'
},
]




function webquiz () {
    //if q is greater than the length of the questions array exit function 
    var questionEl = document.getElementById('question-text');
    questionEl.textContent = Questions[q].text;
    var answerDiv = document.querySelector('.answers');
    answerDiv.textContent="";
    Questions[q].choices.forEach(function(choice){
        console.log(choice)
    var button = document.createElement('button');
    button.setAttribute('class', 'btn');
    button.textContent = choice;
    button.setAttribute('value', choice);
    button.onclick = function(){
        console.log(this);
        console.log(this.value);
        q++;
        webquiz();
    }
    answerDiv.appendChild(button);

    })
    // if (choices === answer) {

    // }

}


//I need a function to loop through the webquiz function
// function looper () {
//     var loopEl = "";
//     for (q; q < [0]; i++) {
//         var index = Math.floor(Math.random()*Questions.length);
//         var char = Questions[index];
//         Questions += char;
//     }
 
//    return randomPass;
//    }


//create a score function to display score attached to code local storage function


//function stores the score for the high score page
function localScore () {
    
    setItem.JSON.stringify(webquiz());
    getItem.JSON.parse(webquiz());
}

//timer function
function countdown() {
    var timer = 30;
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

//This is the start button that hides the questions until clicked
startButton.addEventListener('click', function(){
    document.querySelector('.start-div').classList.add('hide');
    document.querySelector('.question-card').classList.remove('hide');
    //countdown ();
    
    var secondsLeft = 30;
//this timer works 
    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          displayTimer.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
          }
      
        }, 1000);
      }
      //need to attach a display 
      function sendMessage() {
        
        console.log(" hello");
        var timesUp  = document.createElement("correctish");
        //timesUp.setAttribute(displayTimer);
        displayTimer.appendChild(timesUp);
        //display after the countdown
        displayTimer.textContent = " Times up!";
        //todo: call conditionally if the correct answer is clicked
      }
      
      setTime();
      webquiz();

      
      

})


// this is the  question loop function 
// function looper() {
//     //var answersEl = document.querySelector(button);
//     if (answerEl === answersEl.addEventListener('click')){
//     for (var i = 0; i < Questions.length; q++);
//     webquiz();
//     };
// }


// document.querySelector('answers').setInterval(function(){
//     Questions[q]++;
