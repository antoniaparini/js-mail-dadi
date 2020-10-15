//ESERCITAZIONE MAIL - GIOCO DADI


//LISTA/ARRAY EMAIL UTENTI
var accounts = ['davide@boolean.it' , 'claudio@boolean.it' , 'francesca@boolean.it'];
console.log = ('Accounts :' + accounts);

//CHIEDO ALL'UTENTE LA SUA EMAIL
var email = prompt('Inserisci la tua email');
console.log = ('Email utente :' + email);


//CONTROLLO SE E' NELLA LISTA DI CHI PUO' ACCEDERE E IMPLEMENTO UNA VARIABILE DI STATO FALSE PER LA VERIFICA

var emailFound = false;

for ( var i = 0; i < accounts.length; i++); {
  var item = accounts [i];
  if (email == item) {
    emailFound = true;
  }
}

if (emailFound = true); {
  console.log = ('Email valida. Accedi.');
} else {
  console.log = ('Errore. Email non valida. Non puoi accedere.');
}
