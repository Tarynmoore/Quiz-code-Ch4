var start = document.querySelector(".start");
var startGame = document.querySelector(".hide");
var countdownEl = document.querySelector(".countdown"); 
var questionEl = document.querySelector(".question");
var titleEl = document.querySelector("#title");
var choicesEl = document.querySelectorAll(".choices");
var answerEl = document.querySelectorAll(".answer");
var scoreEl = document.querySelector(".score");
var userNameEl = document.querySelector(".userName");
var submitEl = document.querySelector(".submit");
var displayEl = document.querySelector(".display");

var questions = [{
    title: "Who founded the Red Cross?", 
    choices: ["Abraham Lincoln", "Carrie Spector", "Oscar Van Rhijn", "Clara Barton"],
    answer: "Clara Barton"
  }, {
    title: "Which tool is used to estimate the likelihood of certain genetic outcomes?",
    choices: ["Stethescope", "Flask", "Punnet Square", "Punnet Rectangle"],
    answer: "Punnet Square"
  }, {
      title: "What is the capitol of New Hampshire?",
      choices: ["Concord", "Dallas", "Phoenix", "Richmond"],
      answer: "Concord"
  }, {
      title: "What is the main character in a story called?",
      choices: ["Antagonist", "Protagonist", "Sonnet", "Main Character"],
      answer: "Protagonist"
  }]

console.log(questions);

var timeRemaining = questions.length * 15;
var timerId;
var index = 0;

function countdown() {
    countdownEl.classList.remove("hide")
    countdownEl.textContent = "Time Remaining: " + timeRemaining--
    if (timeRemaining <= 0 ) {
        questionEl.classList.add("hide")
        clearInterval(timerId)
        displayScore()
    }
}

function displayQuestions() {
    titleEl.textContent = questions[index].title 
    choicesEl[0].textContent = questions[index].choices[0]
    choicesEl[1].textContent = questions[index].choices[1]
    choicesEl[2].textContent = questions[index].choices[2]
    choicesEl[3].textContent = questions[index].choices[3]
}
console.log(displayQuestions);

function answers() {
    answerEl[0].textContent === questions[index].answer[0]
    answerEl[1].textContent === questions[index].answer[1]
    answerEl[2].textContent === questions[index].answer[2]
    answerEl[3].textContent === questions[index].answer[3]
}

function nextquestion() {
    index++
    if (index < questions.length) {
        displayQuestions()
    } else {
        clearInterval(timerId) 
        questionEl.classList.add("hide")
        displayScore()     
    }       
}

function userQuestions() {
    choicesEl[0].addEventListener("click", nextquestion);
    choicesEl[1].addEventListener("click", nextquestion);
    choicesEl[2].addEventListener("click", nextquestion);
    choicesEl[3].addEventListener("click", nextquestion); 
}
userQuestions();


function renderQuestions() {
    timerId = setInterval(countdown, 1000); 
    questionEl.classList.remove("hide")
    displayQuestions();    
}



start.addEventListener("click", renderQuestions);

console.log(answers);

function displayScore() {
    displayEl.classList.remove("hide")
    countdownEl.classList.add("hide")
    scoreEl.textContent = "Your High Score is: " + timeRemaining + "Enter a username"
}






function wrongAnswer() {
   
}

// var highScore = querySelector
// function displayScore() {       
//     displayEl.classList.remove("hide")

//     }
   


//    if (questions.length < displayQuestions) {
//     displayScore();

// if (userQuestions != answers) {
//     timeRemaining -=5
// }






