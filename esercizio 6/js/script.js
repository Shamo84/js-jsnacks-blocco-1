// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var N = parseInt(prompt("inserisci N"));
var potenze = document.getElementById('potenze');
potenze.innerHTML = "le potenze richieste sono: "

for (var i = 1; i <= N; i++) {
  potenze.innerHTML += (Math.pow(i, 3)) + " ";
}
