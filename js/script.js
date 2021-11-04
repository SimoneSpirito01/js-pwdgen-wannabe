
const firstName = prompt('Inserisci il tuo nome')
const lastName = prompt('Inserisci il tuo cognome')
const favoriteColor = prompt('Inserisci il tuo colore preferito')
const passwordGenerata = firstName + lastName + favoriteColor + 21

document.getElementById('password').innerHTML = 'La, per nulla sicura, password generata è: ' + passwordGenerata
