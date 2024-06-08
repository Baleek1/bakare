// function clock() {
//     var date = new Date()
//     var hours = date.getHours()
//     var minute = date.getMinutes()
//     var sec = date.getSeconds()
//     timer.innerHTML = `${hours} : ${minute} : ${sec}`
//     timer.style.color = 'red'
// }
// clock ()
// setInterval(clock,1000)


let quizData = [
    {
        question: "Q1. Who is the CEO of Appclick ?",
        options: [ " Osinmhen", " Seyi Adeleke", " Seyi law", "Stanley"],
        correct: "Seyi Adeleke",
       
    },
    {
        question: "Q2. Who is the president of Nigeria ?",
        options: ["Osinmhen", "Seyi makinde","Seyi tinubu","Bola ahmed tinubu"],
        correct: "Bola ahmed tinubu",
    
    },
    {
        question: "Q3. What is the capital of Nigeria ?",
        options: ["Abuja", "lagos","Togo","Ibadan"],
        correct: "Abuja",
        
    },
    {
        question: "Q4. What is the capital of bayern ?",
        options: ["new york", "lagos","berlin","london"],
        correct: "berlin",
        
    },
]
const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const quizResult = document.querySelector(".Quiz-result");
const questionList = document.querySelector(".quiz-container .questionList")
var previousquestion = document.querySelector('.previous-btn')
var questionNumber = document.querySelector('.questionNumber')
var option0 = document.getElementById('option0')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var timer = document.getElementsByClassName('.timer')
let i = 0;
let quiz = 0;


function displayQuestion(){
    question.innerHTML = quizData[i].question
    option0.innerHTML = quizData[i].options[0]
    option1.innerHTML = quizData[i].options[1]
    option2.innerHTML = quizData[i].options[2]
    option3.innerHTML = quizData[i].options[3]
    questionNumber.innerHTML = `Question number ${i+1} of ${quizData.length}`
}
nextBtn.addEventListener('click',function(){
    if(i < quizData.length -1){
        i++
        displayQuestion()
    }
    else{
        quizResult.style.display = 'block'
        document.querySelector(".quiz-container").style.display = 'none'
    }
})
previousquestion.addEventListener('click',function (){
    if(i > 0) {
        i--
        displayQuestion()
  }
})

function Backtoquiz (){
    window.location.reload()
}
displayQuestion()

