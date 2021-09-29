const chalk=require("chalk");
var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "What's the full and original name of Captain America?",
  answer: "Steve Rogers"
}, {
  question: "What's Thor's hammer called?",
  answer: "Mjolnir"
},
{
  question: "Do you know what's Spiderman's real name?",
  answer: "Peter Parker"
},
{
question: "How many Infinity Stones are there?",
answer:"6"
},
{
question: "Where is Captain America from?",
answer:  "Brooklyn"
},
{
question: "What does S.H.I.E.L.D. stand for?",
answer: " Strategic Homeland Intervention, Enforcement and Logistics Division."
}];

function welcome() {
 var userName = readlineSync.question(chalk.green("What's your name? "));

  console.log(chalk.red("Welcome "+ userName + " let's see if you know Marvel Cinematic Universe"));
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();