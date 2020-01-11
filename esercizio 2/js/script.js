// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.
var parola1 = prompt("inserisci la prima parola");
var parola2 = prompt("inserisci la seconda parola");
var messaggio = document.getElementById('messaggio');
messaggio.innerHTML = "le due parola dalla più corta alla più lunga sono: ";

if (parola1.length > parola2.length) {
  messaggio.innerHTML += parola2 + " " + parola1;
} else {
  messaggio.innerHTML += parola1 + " " + parola2;
}
