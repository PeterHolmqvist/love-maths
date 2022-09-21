document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame("gameType");
            }
        })
    }

    runGame("addition");
})
/**The main game function called onload documnet */
function runGame(gameType) {
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if(gameType === "addition") {
    displayAdditionQuestion(num1, num2);
} else {
    alert(`unknown game type: ${gametype}`)
    throw `unknown game type: ${gameType}. Aborting!`
}

}

/** Checks the answer against the first element in returned 
 * calculateCorrectdAnswer array
   */
function checkAnswer() {
  let userAnswer  = parseInt(getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if(isCorrect) {
    alert("Hey! You got it right :D");
  }else {
    alert(`Aawww... You answered ${userAnswer} the correct answer is ${calculatedAnswer[0]}!`);
  }
  runGame(calculateCorrectAnswer[1]);
}

/**get the operator and operands from the DOM
 * and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(getElementById('operand1').innerText);
    let operand2 = parseInt(getElementById('operand2').innerText);
    let operator = getElementById('operator').innerText;

    if(operator === "+") {
        return ['operan1' + 'operand2', "addition"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting!`;

    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}