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
                
                
               
    
            
                
    
                //seleziono gli elementi
                let titleDOM = html.querySelector('.title2')
                let answersDOM = html.querySelector('#container2')
                
                
                //inserisco contenuto
                titleDOM.textContent = answerObj.question
                console.log(titleDOM);

                
                
                for(let risp of answerObj.incorrect_answers){

                    let optionClone = html.querySelector('#container2 .button').cloneNode()
                    optionClone.textContent = risp;

                    answersDOM.append(optionClone);

                }

                html.querySelector('#container2 .button').remove()//rimuovo la prima option

                target.append(html)

        })

    }

    

                
                
            
