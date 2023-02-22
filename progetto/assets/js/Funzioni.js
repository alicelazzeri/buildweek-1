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
