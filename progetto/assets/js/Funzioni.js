export const questions = [
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
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
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

export function creaElementoId(elemento, padre, id, testo) {
  let nuovoElemento = document.createElement(elemento);
  nuovoElemento.setAttribute("id", id);
  nuovoElemento.innerHTML = testo;
  document.querySelector(padre).append(nuovoElemento);
}

export function creaElementoClasse(elemento, padre, classe, testo) {
  let nuovoElemento = document.createElement(elemento);
  nuovoElemento.setAttribute("class", classe);
  nuovoElemento.innerHTML = testo;
  document.querySelector(padre).append(nuovoElemento);
}

export function creaElemento(elemento, padre, testo) {
  let nuovoElemento = document.createElement(elemento);
  nuovoElemento.innerHTML = testo;
  document.querySelector(padre).append(nuovoElemento);
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let risposteCorrette = [];
let risposteSbagliate = [];
let currentQuestionIndex = 0;
export function newAnswer(answerObj) {
  fetch("template.html")
    .then((res) => res.text())
    .then((res) => {
      let target = document.querySelector("#target");
      target.innerHTML = res;

      let html = target.querySelector("#container1");

      //timer

      const TIME_LIMIT = 10;
      let timePassed = 0;
      let timeLeft = TIME_LIMIT;
      let timerInterval = null;

      document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining"
        d="
           M 50, 50
           m 45, 0
          a 45,45 0 1,1 -90,0
          a 45,45 0 1,1 90,0"
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
          timePassed++;
          timeLeft = TIME_LIMIT - timePassed;
          document.getElementById("base-timer-label").innerHTML =
            formatTime(timeLeft);
          setCircleDasharray();

          if (timeLeft === 0) {
            onTimesUp();
          }
        }, 1000);
      }

      function formatTime(time) {
        const seconds = time % 60;
        return `${seconds < 10 ? "0" : ""}${seconds}`;
      }

      function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
      }

      function setCircleDasharray() {
        const FULL_DASH_ARRAY = 283;
        const circleDasharray = `${(
          calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
          .getElementById("base-timer-path-remaining")
          .setAttribute("stroke-dasharray", circleDasharray);
      }

      //seleziono gli elementi
      let titleDOM = html.querySelector(".title2");
      let answersDOM = html.querySelector("#container2");

      let footerDOM = html.querySelector("#footer");

      currentQuestionIndex++;

      footerDOM.innerHTML = `${currentQuestionIndex} <span class="color"></span>`;

      let footerSpan = html.querySelector(".color");
      footerSpan.textContent = "/" + questions.length;

      //evento click sui bottoni
      let bottone = html.querySelector("#container2 .button");
      let container = html.querySelector("#container2");

      container.addEventListener("click", (event) => {
        if (event.target.classList.contains("button")) {
          event.target.classList.toggle("clicked");

          // Verifichiamo se la risposta data dall'utente è corretta
          if (event.target.textContent === answerObj.correct_answer) {
            risposteCorrette.push(event.target.textContent);
          } else {
            risposteSbagliate.push(event.target.textContent);
          }
        }
      });

      //inserisco contenuto
      titleDOM.textContent = answerObj.question;

      let risposte = [];

      risposte.push(answerObj.correct_answer);

      for (let val of answerObj.incorrect_answers) {
        risposte.push(val);
      }
      let risposteMix = shuffle(risposte);

      for (let risp of risposteMix) {
        let optionClone = bottone.cloneNode();

        optionClone.textContent = risp;

        answersDOM.append(optionClone);
      }

      bottone.remove(); //rimuovo la prima option

      target.append(html);
    });
  //verifico che abbia salvato le risposte
  console.log("Risposte corrette:", risposteCorrette);
  console.log("Risposte sbagliate:", risposteSbagliate);
}

export function results(risposteCorrette, risposteSbagliate) {
  fetch("template2.html")
    .then((res) => res.text())
    .then((res) => {
        let target = document.querySelector("#target");
        target.innerHTML = res;

      let html = target.querySelector("#container1"); //ricevo oggetto html

      

      //seleziono gli elementi
      let titleDOM = html.querySelector(".title2");
      let paragraph2DOM = html.querySelector(".paragraph2");
      let correctDOM = html.querySelector('.flex-container .correct');
      let wrongDOM = html.querySelector('.flex-container .wrong');
      let totqDOM = html.querySelector('.flex-container .correct .paragraph3 .totQ');
        console.log(totqDOM,);
      //inserisco contenuto
     titleDOM.textContent = 'Results';
     paragraph2DOM.textContent = 'The summary of your answers:';
        correctDOM.textContent = 'Correct';
        wrongDOM.textContent = 'Wrong';
        totqDOM.textContent = "/" + questions.length;
        

    });
}
