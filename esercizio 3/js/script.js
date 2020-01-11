// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

var somma = 0;
// var i = 1;

for (var i = 1; i <= 5; i++) {
  somma += parseInt(prompt("inserisci un numero da sommare"));
}

// while (i <= 5) {
//   somma += parseInt(prompt("inserisci un numero da sommare"));
//   i++;
// }

document.getElementById('somma').innerHTML = "la somma è: " + somma;
