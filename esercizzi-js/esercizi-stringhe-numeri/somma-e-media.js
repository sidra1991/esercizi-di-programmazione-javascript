/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

let one = prompt('inserire numero 1°');
let two = prompt('inserire numero 2°');
let three = prompt('inserire numero 3°');
let four = prompt('inserire numero 4°');
let five = prompt('inserire numero 5°');

let some = parseInt(one) + parseInt(two) + parseInt(three)+ parseInt(four)+ parseInt(five);

let average = some / 5;

document.querySelector('.number').innerHTML= 'numero 1 =' + one +' <br> numero 2 =' + two + '<br>numero 3 =' + three +'<br>numero 4 =' + four +'<br>numero 5 =' + five;

document.querySelector('.some').innerHTML= 'la somma è ' + some;

document.querySelector('.average').innerHTML= 'la media è ' +  average;