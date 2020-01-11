// snack4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var responso = "non puoi entrare";
var invitati = ["luca", "mattia", "andrea", "luisa", "gianuario", "gianfranco"]
var nomeUtente = prompt("mi dici il tuo nome?");
var i = 0;

do {
  if (nomeUtente == invitati[i]) {
    responso = "puoi entrare";
  }
  i++;
} while (responso == "non puoi entrare" && i < invitati.length);

document.getElementById('responso').innerHTML = responso;
