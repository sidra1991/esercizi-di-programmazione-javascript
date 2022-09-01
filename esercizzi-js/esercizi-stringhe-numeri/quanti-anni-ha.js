/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

let age = prompt('inserire il tuo anno di nascita');
let ageNow = prompt('inserire anno corrente');
let oneAndred = 100;
let terminal = parseInt(age) + parseInt(oneAndred);
let ages = parseInt(ageNow) - parseInt(age);
let average = parseInt(oneAndred) - parseInt(ages);

document.querySelector('.age').innerHTML= 'la tua eta è ' + ages ;

document.querySelector('.andred').innerHTML= 'ti mancano ' +  average + ' per avere 100 anni e sara l\'anno ' + terminal;