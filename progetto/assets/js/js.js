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


let body = document.querySelector('body');


function creaElementoId(elemento, padre, id, testo) {
    let nuovoElemento = document.createElement(elemento);
    nuovoElemento.setAttribute("id", id);
    nuovoElemento.innerHTML = testo;
    document.querySelector(padre).append(nuovoElemento);
  }

  
  
  function creaElementoClasse(elemento,padre,classe,testo) {
      let nuovoElemento = document.createElement(elemento);
      nuovoElemento.setAttribute("class", classe);
      nuovoElemento.innerHTML = testo;
      document.querySelector(padre).append(nuovoElemento);
    }

    function creaElemento(elemento,padre,testo) {
        let nuovoElemento = document.createElement(elemento);
        nuovoElemento.innerHTML = testo;
        document.querySelector(padre).append(nuovoElemento);
      }

    
    creaElementoId('div','body','container1','');
    creaElementoClasse('h1','#container1','title','Welcome to ');
    creaElementoClasse('span','.title','bold','your exam');
    creaElementoId('div','#container1','container2','');
    creaElementoId('h2','#container2','subtitle','Instructions');
    creaElementoClasse('p','#container2','paragraph',`We don't expect most engineers to know the answers to 
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



    function quiz (questions) {
      


    }

    let link = document.querySelector('.link')
    link.addEventListener('click', () => {

        if(check.checked){
            container1.innerHTML = '';}
            else{
                alert('confirm')
            }
      
      }) 
    
    


/*let body = document.querySelector('body'); ----------
let container1 = document.createElement('div');
body.append(container1);
container1.id = 'container1'
let h1 = document.createElement('h1');
container1.append(h1);
h1.classList.add('title');
h1.textContent = 'Welcome to '; --------------------
let titolo = document.querySelector('.title');
let span = document.createElement('span');
span.classList.add('bold');
titolo.append(span);
span.textContent = 'your exam'; ----------------------------

let container2 = document.createElement('div');
container1.append(container2);
container2.id = 'container2'; -------------------------
let h2 = document.createElement('h2');
container2.append(h2);
h2.id = 'subtitle';
h2.textContent = 'Instructions'; --------------------
let paragraph = document.createElement('p');
container2.append(paragraph);
paragraph.classList.add('paragraph');
paragraph.textContent  = `We don't expect most engineers to know the answers to 
all of these questions, so don't worry if you're unsure of a few of them.` ----------------

let lista1 = document.createElement('ul');
container1.append(lista1);
lista1.id = 'lista1';------------------------------------------------
let li1 = document.createElement('li');
lista1.append(li1);
li1.innerHTML = 'Each question is <span class="b">timed</span> and can only be <span class="b">answered once</span>.'; ------------------------------------
let li2 = document.createElement('li');
lista1.append(li2);
li2.innerHTML = 'Changing browser tab or opening other windows will <span class="b">invalidate the question</span>.';
let li3 = document.createElement('li');
lista1.append(li3);
li3.innerHTML = 'This exam will take approx. <span class="b">0-5 minutes</span>.'; -----------------------------------


let container3 = document.createElement('div');
container1.append(container3);
container3.id = 'container3'; ------------------------
let check = document.createElement('input');
check.type = 'checkbox';
check.name = 'check'
check.id = 'check'
container3.append(check); ------------------------------
let label = document.createElement('label');
container3.append(label);
label.setAttribute('for', 'check');
console.dir(label)
label.textContent = 'I promise to answer myself without help from anyone';

---------------------------------------------------------------------------
let link = document.createElement('a');
container3.append(link);
link.classList.add('link');
link.textContent = 'PROCEED'; 
link.addEventListener('click', () => {

  if(check.checked){
      container1.innerHTML = '';}
      else{
          alert('confirm')
      }

}) */