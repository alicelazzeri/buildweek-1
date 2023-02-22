export  function creaElementoId(elemento, padre, id, testo) {
    let nuovoElemento = document.createElement(elemento);
    nuovoElemento.setAttribute("id", id);
    nuovoElemento.innerHTML = testo;
    document.querySelector(padre).append(nuovoElemento);
  }
  
 export  function creaElementoClasse(elemento,padre,classe,testo) {
      let nuovoElemento = document.createElement(elemento);
      nuovoElemento.setAttribute("class", classe);
      nuovoElemento.innerHTML = testo;
      document.querySelector(padre).append(nuovoElemento);
    }

 export  function creaElemento(elemento,padre,testo) {
        let nuovoElemento = document.createElement(elemento);
        nuovoElemento.innerHTML = testo;
        document.querySelector(padre).append(nuovoElemento);
      }

export function newAnswer(answerObj){    

    
    
    
          
        fetch('template.html')
        .then(res => res.text())
        .then(res => {
    
                let target = document.querySelector('#target');
                target.innerHTML = res
                
                let html = target.querySelector('#container1')
                
                const FULL_DASH_ARRAY = 283;


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
} 
               

            
                
    
                //seleziono gli elementi
                let titleDOM = html.querySelector('.title2')
                let answersDOM = html.querySelector('#container2')
                let spanDOM = html.querySelector('.color')
                
                //inserisco contenuto
                titleDOM.textContent = answerObj.question
                

                
                for(let risp of answerObj.incorrect_answers){

                    let optionClone = html.querySelector('#container2 .button').cloneNode()
                    optionClone.textContent = risp;

                    answersDOM.append(optionClone);
                    

                }
                let indice = 0;
                let next = document.querySelectorAll('.button')
                    console.log(next);
                    for (let i = 0; i < next.length; i++) {
                        next[i].addEventListener('click', function() {
                        newAnswer(answerObj[indice]);
                        indice++;
                        })};
                html.querySelector('#container2 .button').remove()//rimuovo la prima option

                target.append(html)

        })

    }

    

                
                
            
