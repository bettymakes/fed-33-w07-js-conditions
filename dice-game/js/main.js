var diceValue = Math.ceil(Math.random() * 6);

var diceRollSentence = "You rolled: " + diceValue;
var diceRollSentenceFancy = `You rolled: ${diceValue}`;

console.log(diceRollSentence);
console.log(diceRollSentenceFancy);

// Get a DOM node to insert the "You rolled some value" text
var taglineElement = document.getElementById('tagline');

// Insert the "You rolled some value" sentence into the taglentElement
taglineElement.innerText = diceRollSentence;

// If my dice value is 1 then I show the dice1.svg
// If my dice value is 2 then I show the dice2.svg
// If my dice value is 3 then etc.
var diceContainerElement = document.getElementById('dice-container');
diceContainerElement.innerHTML = `<img src="img/dice${diceValue}.svg" alt="dice" class="dice">`


// if(diceValue === 1) {
//   diceContainerElement.innerHTML = '<img src="img/dice1.svg" alt="dice">'
// }
// else if(diceValue === 2) {
//   diceContainerElement.innerHTML = '<img src="img/dice2.svg" alt="dice">'
// }
// else if(diceValue === 3) {
//   diceContainerElement.innerHTML = '<img src="img/dice3.svg" alt="dice">'
// }
// else if(diceValue === 4) {
//   diceContainerElement.innerHTML = '<img src="img/dice4.svg" alt="dice">'
// }
// else if(diceValue === 5) {
//   diceContainerElement.innerHTML = '<img src="img/dice5.svg" alt="dice">'
// }
// else if(diceValue === 6) {
//   diceContainerElement.innerHTML = '<img src="img/dice6.svg" alt="dice">'
// }
