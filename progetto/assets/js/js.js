let body = document.querySelector('body');
let container1 = document.createElement('div');
body.append(container1);
container1.id = 'container1'
let h1 = document.createElement('h1');
container1.append(h1);
h1.classList.add('title');
h1.textContent = 'Welcome to ';
let titolo = document.querySelector('.title');
let span = document.createElement('span');
span.classList.add('bold');
titolo.append(span);
span.textContent = 'your exam';

let container2 = document.createElement('div')
container1.append(container2);
container2.id = 'container2';
let h2 = document.createElement('h2');
container2.append(h2);
h2.id = 'subtitle';
h2.textContent = 'Instructions';
let paragraph = document.createElement('p');
container2.append(paragraph);
paragraph.classList.add('paragraph');
paragraph.textContent = `We don't expect most engineers to know the answers to all of these questions, so don't worry if you're unsure of a few of them.`


let lista1 = document.createElement('ul');
container1.append(lista1);
lista1.id = 'lista1';
let li1 = document.createElement('li');
lista1.append(li1);
li1.textContent = 'Each question is timed and can only be answered once.';
let li2 = document.createElement('li');
lista1.append(li2);
li2.textContent = 'Changing browser tab or opening other windows will invalidate the question.';
let li3 = document.createElement('li');
lista1.append(li3);
li3.textContent = 'This exam will take approx. 0-5 minutes.';


let container3 = document.createElement('div');
container1.append(container3);
container3.id = 'container3';
let check = document.createElement('input');
check.type = 'checkbox';
check.name = 'check'
check.id = 'check'
container3.append(check);
let label = document.createElement('label');
container3.append(label);
label.for = 'check';
label.textContent = 'I promise to answer myself without help from anyone';


let link = document.createElement('a');
container3.append(link);
link.classList.add('link');
link.textContent = 'PROCEED';
link.href = '#';