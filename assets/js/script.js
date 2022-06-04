//pseudocode
//create variables at the top
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var displayTimer = document.querySelector(".correctish");
var answersEl = document.querySelector('question-card hide');
var highScore = document.querySelector('View-High-Scores');
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
    choices:['0','1','3','4'],
    answer:'0'
},
//question 2
{
    text:'How do you make global style changes in CSS?',
    choices:['not possible','--global','Global;','*'],
    answer:'*'
},
//question 3
{
    text:'how do you define a string?',
    choices:['with a dictionary','like this','banana','with ""s'],
    answer:'with ""s'
},
//question 4
{
    text:'What punctuation is used to define a class in CSS?',
    choices:['?',';','#','.'],
    answer:'.'
},
//question 5
{
    text:'Can you git push and pull at the same time?',
    choices:['false','true'],
    answer:'false'
},
]




function webquiz () {
    //if q is greater than the length of the questions array exit function 
    if (q >= Questions[4]) {
        console.log("does this work")
        clearInterval(timeCount);
        textContent("Game Over!");
        stop();
    }
    var questionEl = document.getElementById('question-text');
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
        var scoreEl = q++;
        webquiz();
        
    }
    answerDiv.appendChild(button);
    
    })
    // if (choices === answer) {

    // }

}

//create a score function to display score attached to code local storage function


//function stores the score for the high score page
function localScore () {
    if (Questions === answer) {
    console.log('correct!');
    highScore.textContent('Winner!');
    setItem.JSON.stringify(webquiz());
    getItem.JSON.parse(webquiz());
    localScore();
}
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
 


// function printHighscores() {
//     // either get scores from localstorage or set to empty array
//     var highscores = JSON.parse(window.localStorage.getItem(highScore)) || [];
  
//     // sort highscores by score property in descending order
//     highscores.sort(function(a, b) {
//       return b.score - a.score;
//     });
  
//     highscores.forEach(function(score) {
//       // create li tag for each high score
//       var liTag = document.createElement("li");
//       liTag.textContent = score.initials + " - " + score.score;
  
//       // display on page
//       var olEl = document.getElementById(highScore);
//       olEl.appendChild(liTag);
//     });
//   }
  
//   function clearHighscores() {
//     window.localStorage.removeItem(highscores);
//     window.location.reload();
//   }
  
//   document.getElementById("clear").onclick = clearHighscores;
  
//   // run function when page loads
//   printHighscores();