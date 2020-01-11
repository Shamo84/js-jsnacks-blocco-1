// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.
var num1 = parseInt(prompt("inserisci il primo numero"));
var num2 = parseInt(prompt("inserisci il secondo numero"));
var testo = document.getElementById('maggiore');

if (num1 > num2) {
  testo.innerHTML = "il numero maggiore è: " + num1;
} else {
  testo.innerHTML = "il numero maggiore è: " + num2;
}
