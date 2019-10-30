// function Quiz(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }
 

// Quiz.prototype.getQuestionIndex = function() {
//     return this.questions[this.questionIndex];
// }
 
// Quiz.prototype.guess = function(answer) {
//     if(this.getQuestionIndex().isCorrectAnswer(answer)) {
//         this.score++;
//     }
 
//     this.questionIndex++;
// }
 
// Quiz.prototype.isEnded = function() {
//     return this.questionIndex === this.questions.length;
// }
 
 
// function Question(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }
 
// Question.prototype.isCorrectAnswer = function(choice) {
//     return this.answer === choice;
// }
 


// // create questions here
// var questions = [
//     new Question("One of this list cannot donate:", ["An athletic", "A 22-years old adult","Cancer patient", "A  a person with 55-kg"], "Cancer patient"),
//     new Question("How much blood an adult has?", ["4-5 liters", "10 liters", "1 liters", "450 ml"], "4-5 liters"),
//     new Question("From whom a patient with O- blood type can get blood?", ["O- blood type person", "AB+ blood type person", "A+ blood type person", "B- blood type person"], "O- blood type person"),
//     new Question("Why you have to provide your personl info when donating?", ["For chatting", "To indruce your self", "NON", "For medical history"], "For medical history"),
//     new Question("For whom an AB- blood type person can give blood", ["A- blood type patient", "B+ blood type patient", "AB+ blood type patient", "All"], "All")
// ];

 
// function populate() {
//     if(quiz.isEnded()) {
//         showScores();
//     }
//     else {
//         // show question
//         var element = document.getElementById("question");
//         element.innerHTML = quiz.getQuestionIndex().text;
 
//         // show options
//         var choices = quiz.getQuestionIndex().choices;
//         for(var i = 0; i < choices.length; i++) {
//             var element = document.getElementById("choice" + i);
//             element.innerHTML = choices[i];
//             guess("btn" + i, choices[i]);
//         }
 
//         showProgress();
//     }
// };
 
// function guess(id, guess) {
//     var button = document.getElementById(id);
//     button.onclick = function() {
//         quiz.guess(guess);
//         populate();
//     }
// };
 
 
// function showProgress() {
//     var currentQuestionNumber = quiz.questionIndex + 1;
//     var element = document.getElementById("progress");
//     element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
// };
 
// function showScores() {
//     var gameOverHTML = "";
//     gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
//     var element = document.getElementById("quiz");
//     element.innerHTML = gameOverHTML;
// };
 

 
// // create quiz
// var quiz = new Quiz(questions);
 
// // display quiz
// populate();

// //https://webdevtrick.com/create-javascript-quiz-program/


//I'm using the code from https://webdevtrick.com/create-javascript-quiz-program/
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
 }
 Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
 }
 Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
 }
 Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
 }
 function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
 }
 Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
 }
 // create questions here
 var questions = [
    new Question("One of this list cannot donate:", ["An athletic", "A 22-years old adult","Cancer patient", "A  a person with 55-kg"], "Cancer patient"),
    new Question("How much blood an adult has?", ["4-5 liters", "10 liters", "1 liters", "450 ml"], "4-5 liters"),
    new Question("A patient with O+ blood type can get blood from", ["O- blood type person", "AB+ blood type person", "A+ blood type person", "B- blood type person"], "O- blood type person"),
    new Question("Why you have to provide your personl info when donating?", ["For chatting", "To indruce your self", "NON", "For medical history"], "For medical history"),
    new Question("An AB- blood type person can give blood for", ["A- blood type patient", "B+ blood type patient", "AB+ blood type patient", "All"], "All"),
    new Question("Who is the patient who will find it hard to find a donater according to the blood types", ["A- blood type patient", "B+ blood type patient", "AB+ blood type patient", "O- blood type patient"], "O- blood type patient")
 ];
 function process() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
 };
 function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        process();
    }
 };
 function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
 };
 function showScores() {
    var gameOverHTML = "<h1>Your Result</h1>";
    gameOverHTML += "<h2 id='score'> You got: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
 };
 // create quiz
 var quiz = new Quiz(questions);
 // display quiz
 process();