console.log('JS OK!')

// ! Traccia 1 (Palidroma)

/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* const addWord = prompt('Inserisici una parola', 'osso').trim();

const newWord = reversWords(addWord);
console.log(newWord);

const result = palindrome(addWord, newWord);

function reversWords (word) {

    let reversWord = '';
    for (i = word.length -1; i >= 0; i--)
    reversWord += word[i];

    return reversWord
}

function palindrome (firstWord, secondWord) {
    if (firstWord === secondWord) {
        console.log(`La parola ${firstWord} è palindrome`)
    } else {
        console.log(`Le parole ${firstWord} non è palindrome`)
    }
} */

// ! Traccia 2 (Pari e Dispari)

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/* const userChoice = prompt('Scegli se pari o dispari', 'pari').trim();
console.log(userChoice);

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5', '3'));

while (isNaN(userNumber)) {
    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5', '3'));
}

console.log(userNumber);

const cpuNumber = cpuNumbers();
console.log(cpuNumber)

const sum = userNumber + cpuNumber;
console.log(sum);

resultNumbers = evenOdd(sum);
console.log(resultNumbers);

function cpuNumbers() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

function evenOdd (num1) {
    let resultNumber;
    
    if (num1 % 2 === 0) {
        resultNumber = "E' pari"
    } else {
        resultNumber = "E' dispari"
    }

    return resultNumber
} */