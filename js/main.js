//ESERCITAZIONE MAIL - GIOCO DADI




//CHIEDO ALL'UTENTE LA SUA EMAIL
var email = prompt('Inserisci la tua email');
console.log('');

//LISTA/ARRAY EMAIL UTENTI
var accounts = ['davide@boolean.it' , 'claudio@boolean.it' , 'francesca@boolean.it'];
console.log('Accounts :' + accounts);


//CONTROLLO SE E' NELLA LISTA DI CHI PUO' ACCEDERE E IMPLEMENTO UNA VARIABILE DI STATO FALSE PER LA VERIFICA

var emailFound = false;

for ( var i = 0; (i < accounts.length) && (emailFound == false); i++); {
  var item = accounts [i];
    console.log ('iterazione' + i + ':' + item);
}

if (email = item) {
  emailFound = true;
  console.log('Email valida.');
} else {
  console.log('Errore. Email non valida.');
}

if (emailFound == true) {
  console.log('Accesso abilitato.');
} else {
  console.log('Accesso negato.');
}
