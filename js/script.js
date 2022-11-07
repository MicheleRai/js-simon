/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

let counter = 5;
let arrNum;
let guessNum;
let score;
let common = [];

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateNum(min, max) {
	const arrRandoms = [];
	for (let i = 0; i < 5; i++) {
		do {
			randomNumber = getRandomInteger(min, max);
		} while (arrRandoms.includes(randomNumber))
		arrRandoms.push(randomNumber);
	}
	return arrRandoms;
}

function generateGuess() {
	const arrGuess = [];
	for (let i = 0; i < 5; i++) {
		do {
			userNumber = parseInt(prompt('inserisci i numeri che ti ricordi'));
		} while (arrGuess.includes(userNumber))
		arrGuess.push(userNumber);
	}
	return arrGuess;
}

// function checkAllNum(group1, group2) {
// 	x = 0
    
// 	for (let i = 0; i < group1.length; i++) {
// 		if (group1.includes(group2)) {
//             common.push(group1[i]);
//             console.log(common);
// 			x++;
// 		}
// 	}
//     return common;
// }

arrNum = generateNum(0, 100);
console.log(arrNum);


const idInterval = setInterval(count, 500);
function count() {
	if (counter === 0) {
		console.log('Inserisci i numeri che ricordi!');

        guessNum = generateGuess();
        console.log(guessNum);

        let getResult = function (arrNum, guessNum) {
            let i = arrNum.length;
            if (i != guessNum.length)
			 return false;
         
            while (i--) {
              if (arrNum[i] !== guessNum[i])
			   return false;
            }
            return true;
          };
    
        if (getResult = true) {
            const resultNumber = arrNum.filter(element => guessNum.includes(element));
            alert('I numeri indovinati sono: ' + resultNumber);
        }

		clearInterval(idInterval);
	} else {
		console.log(counter);
		counter--;
	}
}