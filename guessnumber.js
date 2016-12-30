var n = Math.floor(Math.random() * 9);
var essai = Number(prompt("Choisis le nombre d'essais"));
var fork = 'Choisis entre 0 et 9!';


while (essai > 0) {
  var devine = prompt(fork +' Tu as donc ' + essai + ' essais.');
  if (!devine) break;
  guess = Number(devine);
  if (devine == n) {
    alert("GG");
    essai = 0;
  } else {
    fork = 'Nope.';
    if (devine < n) fork += ' Trop petit !';
    if (devine > n) fork += ' Trop grand !';
    essai = essai - 1;
  }
}
alert('Le chiffre était ' + n );