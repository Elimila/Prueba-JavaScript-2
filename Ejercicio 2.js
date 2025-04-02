
//Diseña un algoritmo que imprima los números impares 
// entre un número dado por el usuario y los siguientes 50 números.

// Solución 1
function printOddNumbers(startNumber){
    if (startNumber % 2 === 0){
        startNumber++;
    }
    for (let i = 0; i < 50; i++){
        console.log(startNumber); 
        startNumber +=2;
    }
}

printOddNumbers(0);

// Solición 2

/*function getOddNumbers(startNumber) {
    if (startNumber % 2 === 0) {
        startNumber++;
    }

    const OddNumbers = [];
    for (let i = 0; i < 50; i++) {
        OddNumbers.push(startNumber);
        startNumber += 2;
    }
return OddNumbers; 
  }
const result = getOddNumbers(0);
console.log(result); */

