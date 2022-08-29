/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/


let cats = prompt('quanti gatti sono?');
let line = prompt('i gatti sono in fila da quanti?');

let file = Math.round(parseInt(cats) / parseInt(line)); 
let result;

if (cats % line == 0 ) {
  result = 'e sono perfettamente allineate'
} else {
  let app = file - (cats % line);
  result = `con l'avanzo di ${cats % line} ma ne mancano ${app} gatti per avere un altra fila `;
}
document.querySelector('.responso').innerHTML= `i gatti sono distribuiti in ${file} file ${result}`