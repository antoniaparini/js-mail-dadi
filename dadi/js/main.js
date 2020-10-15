//DEVO GENERARE NUMERO RANDOM TRA 1 E 6
var numeroPlayer = parseInt(prompt('Inserisci un numero tra 1 e 6'));
console.log('numero player: ' + numeroPlayer);


if(isNaN(numeroPlayer) == false && numeroPlayer >= 1 && numeroPlayer <= 6) {
  var numeroMacchina = Math.floor(Math.random() * 6) + 1;
  console.log('numero macchina: ' + numeroMacchina);

  if(numeroPlayer > numeroMacchina) {
    console.log('Wow! Hai vinto!');

  } else if (numeroPlayer == numeroMacchina) {
      console.log('Hai pareggiato!');
  } else {
    console.log('Hai perso! Sarà per la prossima volta!');
  }
  } else {
    console.log('Hai inserito un dato non valido');
}
