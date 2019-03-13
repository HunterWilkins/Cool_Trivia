
//setting up the variables

var triviaArray = [
    {

    question: "What's 2+2?",
    choice1: "4",
    choice2: "Trick Question. 22. Because this is a string in the code.",
    choice3: "Journey to the Center of the Earth.",
    answer: "Journey to the Center of the Earth.",
    right: "Darn Right.",
    wrong: "Really? The answer was Journey to the Center of the Earth.",
    timeUp: "HA! Sucks to suck. Time's Up.",
    },
    {
    question: "How many tongues does Orron-Poliath have?",
    choice1: "Uhhhh....one?",
    choice2: "Who's Orron-Poliath?...",
    choice3: "Four.",
    answer: "Four.",
    right: "You know the truth.",
    wrong: "You are unworthy.",
    timeUp: "Orron has no patience for those with too much patience."
    
    }
]

//functional variables
var timerRunning = false;

var intervalVar;

var questionsLeft = 2;

var questionIndex = 0;

var score = 0;

var showScene;

var timeLeft = 10;


function openingScreen(){
    $(".content").html("<button class = 'start-button'>Start The Trivia</button>");
    $(".content").on("click", "button", function(){
        showQuestion(questionIndex);
    })
}

function showQuestion(qIndex){
    $(".content").empty();
    var questionDiv = $(".content").append("<div>");
    
    if (qIndex < triviaArray.length){
         
        var question = $("<h1>" + triviaArray[qIndex].question + "</h1>");
        var choice1 = $("<h2>" + triviaArray[qIndex].choice1 + "</h2>");
        var choice2 = $("<h2>" + triviaArray[qIndex].choice2 + "</h2>");
        var choice3 = $("<h2>" + triviaArray[qIndex].choice3 + "</h2>");
        console.log(choice1);
        questionsLeft--;
        questionDiv.append(question, "<hr>", choice1, choice2, choice3);
        timer();
        timerRunning = false;
    }
    else {
        timeLeft = 0;
        
        $("#timer").html("<h1 class = 'game-over'>~ Game Over ~</h1>");
        clearInterval(intervalVar);
        questionDiv.append("<h1 class = 'results'>You got " + score + " out of " + triviaArray.length + " correct.");
    }

}

$(".content").on("click", "h2", function(){
    var userGuess = $(this).text();
    
    console.log("clicked");
    
    if (userGuess === triviaArray[questionIndex].answer){
         alert(triviaArray[questionIndex].right);
         score++;
    }
     else {
         alert(triviaArray[questionIndex].wrong);         
     }
     timeLeft = 10;
     $(".time-left").html(timeLeft);
    questionIndex++;
    clearInterval(intervalVar);
    showQuestion(questionIndex);
})

openingScreen();

function timer(){
    if (!timerRunning){
        intervalVar = setInterval(function(){
            if (timeLeft > 0){
                timeLeft--;
                $(".time-left").html(timeLeft);
            }
            else {
                clearInterval(intervalVar);
                if (questionIndex < triviaArray.length){
                    questionIndex++;
                    showQuestion(questionIndex);
                    timeLeft = 10;
                }
                else {
                    questionIndex++;
                    showQuestion(questionIndex);
                }
            } console.log("Time Left: " + timeLeft);
        }, 1000)
         timerRunning = true;
    }
       
}

//this function will iterate between questions and choices
