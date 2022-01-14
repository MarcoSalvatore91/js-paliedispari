console.log('JS OK!')

// ! Traccia 1 (Palidroma)

/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// ! Traccia 2 (Pari e Dispari)

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const userChoice = prompt('Scegli se pari o dispari', 'Pari').trim();
console.log(userChoice);
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5', '3'));
console.log(userNumber);

const cpuNumber = cpuNumbers();
console.log(cpuNumber)

const result = userNumber + cpuNumber;
console.log(result);

resultNumbers = evenOdd ();
console.log(resultNumbers);

function cpuNumbers () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

function evenOdd () {
    let resultNumber;
    
    if (userNumber % 2 === 0) {
        resultNumber = "E' pari"
    } else {
        resultNumber = "E' dispari"
    }

    return resultNumber
}