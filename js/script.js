console.log('JS OK!')

// ! Traccia 1 (Palidroma)

/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const word = document.getElementById('word');
const send = document.getElementById('send');
const wordResult = document.getElementById('word-result')

let result;

send.addEventListener('click', function(){
    
    const newWord = reverseWords(word.value);
    result = palindrome(word.value, newWord);
    wordResult.innerHTML = result;
    
})

function reverseWords (word) {

    let reversWord = '';
    for (i = word.length -1; i >= 0; i--)
    reversWord += word[i];

    return reversWord
}

function palindrome (firstWord, secondWord) {

    let result;

    if (firstWord === secondWord) {
        result = `La parola ${firstWord} è palindrome`;
        console.log(`La parola ${firstWord} è palindrome`)
    } else {
        result = `La parola ${firstWord} non è palindrome`;
        console.log(`La parola ${firstWord} non è palindrome`)
    }

    return result
} 

// ! Traccia 2 (Pari e Dispari)

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/* const sendForm = document.getElementById('send');
const oddEven = document.getElementById('odd-even');
const number = document.getElementById('number');
const result = document.getElementById('result-match');

let resultNumber;
let resultMatch = '';

send.addEventListener('click', function() {
    if (oddEven.value === 'pari' || oddEven.value === 'dispari') {
    } else {
        alert('Inserisci solo pari o dispari!')
    }
    if ((number.value <= 0) || (number.value > 5) || isNaN(number.value)) {
        alert('Inserire numeri tra 1 e 5!')
    } else {
        console.log(number.value);
    } 

    const cpuNumber = cpuNumbers(1, 5);
    console.log(cpuNumber)

    const sum = parseInt(number.value) + cpuNumber;
    console.log(sum);

    resultNumber = evenOdd(sum);
    console.log(resultNumber);

    if (oddEven.value === evenOdd(sum)) {
        resultMatch += 'Hai vinto!!!';
        console.log('Hai vinto!!!')
    } else {
        resultMatch += 'Hai perso!';
        console.log('Hai perso!')
    }

    result.innerHTML = resultMatch;
})


// funtion
function cpuNumbers(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function evenOdd (num1) {
    let resultNumber;
    
    if (num1 % 2 === 0) {
        resultNumber = "pari"
    } else {
        resultNumber = "dispari"
    }

    return resultNumber
} 
 */