var start = document.querySelector(".start");

var questionOne = document.querySelector(".question1");
var startGame = document.querySelector(".hide");
var countdownEl = document.querySelector("#countdown"); 
var questionEl = document.querySelector(".question");
var titleEl = document.querySelector("#title");
var choicesEl = document.querySelectorAll(".choices");

var questions = [{
    title: "question1", 
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer1"
  }, {
    title: "question2",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3"
  }, {
      title: "question3",
      choices: ["answer1", "answer2", "answer3", "answer4"],
      answer: "answer3"
  }, {
      title: "question4",
      choices: ["answer1", "answer2", "answer3", "answer4"],
      answer: "answer1"
  }]

var timeRemaining = questions.length * 15;
var timerId;
var index = 0;

function countdown() {
    countdownEl.textContent = "Time Remaining:" + timeRemaining--
}

function displayQuestions() {
    titleEl.textContent = questions[index].title 
    choicesEl[0].textContent = questions[index].choices[0]
    choicesEl[1].textContent = questions[index].choices[1]
    choicesEl[2].textContent = questions[index].choices[2]
    choicesEl[3].textContent = questions[index].choices[3]
}
function nextquestion() {
    index++
    if (index < questions.length) {
        displayQuestions()
    } else {
        clearInterval(timerId)
    }
    
}
choicesEl[0].addEventListener("click", nextquestion);
choicesEl[1].addEventListener("click", nextquestion);
choicesEl[2].addEventListener("click", nextquestion);
choicesEl[3].addEventListener("click", nextquestion); 




function renderQuestions() {
    timerId = setInterval(countdown, 1000); 
    questionEl. classList.remove("hide")
    displayQuestions();
}


start.addEventListener("click", renderQuestions);