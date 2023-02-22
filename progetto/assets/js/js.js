

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
                newAnswer();
            }
            else{
                alert('confirm')
            }
      
      })
    
      


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
