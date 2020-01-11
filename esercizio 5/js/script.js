// Snack5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var array = [];
var numero;

for (var i = 1; i <= 6; i++) {
  numero = parseInt(prompt("inserisci un numero"));
  if (numero % 2 == 1) {
    array.push(numero);
  }
}

document.getElementById('messaggio').innerHTML = "i numeri dispari inseriti sono: " + array;
