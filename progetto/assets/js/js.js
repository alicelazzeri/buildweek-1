const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

//pagina1

let body = document.querySelector('body');

import {creaElementoId, creaElementoClasse, creaElemento, newAnswer} from "./Funzioni.js"



    creaElementoId('div','body','container1','');
    creaElementoClasse('div','#container1','title','Welcome to ');
    creaElementoClasse('span','.title','bold','your exam');
    creaElementoId('div','#container1','container5','');
    creaElementoId('div','#container5','subtitle','Instructions');
    creaElementoClasse('div','#container5','paragraph',`We don't expect most engineers to know the answers to 
    all of these questions, so don't worry if you're unsure of a few of them.`);
    creaElementoId('ul','#container1','lista1','');
    creaElemento('li','#lista1','Each question is <span class="b">timed</span> and can only be <span class="b">answered once</span>.');
    creaElemento('li','#lista1','Changing browser tab or opening other windows will <span class="b">invalidate the question</span>.');
    creaElemento('li','#lista1','This exam will take approx. <span class="b">0-5 minutes</span>.');
    creaElementoId('div','#container1','container3','');
    creaElementoId('input','#container3','check','');
    check.type = 'checkbox';
    check.name = 'check';
    creaElemento('label','#container3','I promise to answer myself without help from anyone');
    let label = document.querySelector('label');
    label.setAttribute('for', 'check');
    creaElementoClasse('a','#container3','link','PROCEED');

//pagina 2

    let link = document.querySelector('.link')
    link.addEventListener('click', () => {

        if(check.checked){
            container1.innerHTML='';
                newAnswer(questions[indice]);
            }
            else{
                alert('confirm')
            }
      
      })
    
      let indice = 0;

        let next = document.querySelectorAll('.button');
      for(let bottone of next){
        bottone.addEventListener('click',function(){

            newAnswer(domande[indice]);
            indice++;
      })}

       


//Timer
/*const FULL_DASH_ARRAY = 283;


const COLOR_CODES = {
  info: {
    color: "#00ffff"
}
}

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m 45, 0
          a 45,45 0 1,0 -90,0
          a 45,45 0 1,0 90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

return `${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
} */
