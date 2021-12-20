/*
1. Chiedere il nome all'utente
2. Salvare il nome in una variabile
3. Chiedere il cognome all'utente
4. Salvare il cognome in una variabile
5. Chiedere il colore preferito all-utente
6. Salvare il colore preferito in una variabile
7. Sommare le variabili
8. Stampo le variabili sommate
*/

// Chiedo il nome all'utente
const userName = prompt('Come ti chiami?');
console.log(userName);

// Chiedo il cognome all'utente
const userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);

// Chiedo qual è il colore preferito dell'utente
const userFavouriteColor = prompt('Qual è il tuo colore preferito?');
console.log(userFavouriteColor);

// Sommo le variabili
const variablesSum = userName + userSurname + userFavouriteColor + 21;
console.log(variablesSum);

// Recupero il risultato da stampare
const result = document.getElementById('password');

// Stampo le variabili sommate
result.innerHTML = `Password: ${variablesSum}`;