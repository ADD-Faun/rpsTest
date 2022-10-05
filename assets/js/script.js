// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                imageCycle();
            } 
            else {
                let gameType = this.getAttribute("data-type");
                
            }
        });
    }

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

	// Creates computers choice
    let opponentc = Math.floor(Math.random() * 3) + 1; ;
    let player1 = gameType
    
    setTimeout(() => {  
        switch (opponentc) {
        case 1:
            document.getElementById("oppimage").src="assets/images/rock.png";;
           break;
        case 2:
            document.getElementById("oppimage").src="assets/images/paper.png";;
           break;
        case 3:
            document.getElementById("oppimage").src="assets/images/scissors.png";;
           break;
            } 
        }, 3500);;

    setTimeout(() => {  
        switch (player1) {
        case "rock":
            document.getElementById("imageCycle").src="assets/images/rock.png";;
           break;
        case "paper":
            document.getElementById("imageCycle").src="assets/images/paper.png";;
           break;
        case "scissors":
            document.getElementById("imageCycle").src="assets/images/scissors.png";;
           break;
            } 
        }, 3500);;

}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {


    if (isCorrect = draw){
        alert("Draw")
    }
      else if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}

function imageCycle(){

    document.getElementById("imageCycle").src="assets/images/rock.png";
    setTimeout(() => { document.getElementById("imageCycle").src="assets/images/paper.png";; }, 1000);
    setTimeout(() => { document.getElementById("imageCycle").src="assets/images/scissors.png";; }, 2000);
    setTimeout(() => { document.getElementById("imageCycle").src="assets/images/question.jpeg";; }, 3000);

    document.getElementById("oppimage").src="assets/images/rock.png";
    setTimeout(() => { document.getElementById("oppimage").src="assets/images/paper.png";; }, 1000);
    setTimeout(() => { document.getElementById("oppimage").src="assets/images/scissors.png";; }, 2000);
    setTimeout(() => { document.getElementById("oppimage").src="assets/images/question.jpeg";; }, 3000);

    runGame(gameType)

}

