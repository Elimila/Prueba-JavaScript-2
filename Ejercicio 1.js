

//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

//solucion 1

function countLetter(phrase, letter) {
    phrase = phrase.toLowerCase();
    letter = letter.toLowerCase();

    let counter = 0;

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === letter){
            counter++; 
        }
    }
    return counter; 
}

const myphase = 'Prueba JavaScript 1';
const myLetter = 'a';
const letterCount = countLetter(myphase, myLetter);
console.log(`la letra '${myLetter}' aparece ${letterCount} en la frace.`);

// solución 2

/*function countLetter(phase, letter) {
    phase = phase.toLowerCase();
    letter = letter.toLowerCase();

    let counter = 0;
    phase.split('').forEach(char => {
        if (char === letter){
            counter++;
        }
    });
    return counter;
}
    
const myphase = 'Prueba JavaScript 1';
const myLetter = 'a';
const letterCount = countLetter(myphase, myLetter);
console.log(`la letra '${myLetter}' aparece ${letterCount} en la frace.`);*/






