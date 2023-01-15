// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    ready()
});

function ready() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let selected = this.getAttribute("data-type")
            selection(selected);

        })
}
}
            
function test() {
    alert("Test success");
}

function selection(selected) {

    if (selected != "submit") {
        let gameType = selected;
        
        if (difficulty.checked) {
            console.log(`Checkbox is checked!`)
                diff = 5
            } 
        else {
            console.log(`Checkbox is not checked.`)
                diff = 3
            }
        
        imageCycle(gameType, diff);
        
    } 

}


const difficulty = document.querySelector('#lizard-spock');

const hid1 = document.getElementById('lizard');
const hid2 = document.getElementById('spock');

difficulty.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    hid1.removeAttribute("hidden");
    hid2.removeAttribute("hidden");
  } else {
    console.log("Checkbox is not checked..");
    hid1.setAttribute("hidden", true);
    hid2.setAttribute("hidden", true);
  }
});



/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType , diff) {

	// Creates computers choice

    var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    //if box checked let choices = all 5 things 


    opponentc = choices[Math.floor(Math.random() * diff)];
    player1 = gameType ;

    document.getElementById('playeranswer').textContent = player1;
    document.getElementById('oppanswer').textContent = opponentc;
    
    setTimeout(() => {  
        switch (opponentc) {
        case "rock":
            document.getElementById("oppimage").src="assets/images/rock.jpg";;
           break;
        case "paper":
            document.getElementById("oppimage").src="assets/images/paper.jpg";;
           break;
        case "scissors":
            document.getElementById("oppimage").src="assets/images/scissors.jpg";;
           break;
        case "lizard":
            document.getElementById("oppimage").src="assets/images/lizard.jpg";;
           break;
        case "spock":
            document.getElementById("oppimage").src="assets/images/spock.jpg";;
           break;
            } 
        }, 4500);;

    setTimeout(() => {  
        switch (player1) {
        case "rock":
            document.getElementById("playerimage").src="assets/images/rock.jpg";;
           break;
        case "paper":
            document.getElementById("playerimage").src="assets/images/paper.jpg";;
           break;
        case "scissors":
            document.getElementById("playerimage").src="assets/images/scissors.jpg";;
           break;
        case "lizard":
            document.getElementById("playerimage").src="assets/images/lizard.jpg";;
           break;
        case "spock":
            document.getElementById("playerimage").src="assets/images/spock.jpg";;
           break;
            } 
        }, 4500);;

        setTimeout(() => {checkAnswer(player1 , opponentc);; }, 6000);
}

/**
 * defines the winning answer for each throw 
 * scores the player 
 */
function checkAnswer(player1 , opponentc) {

        ans1=0;
        ans2=0;

    switch (opponentc) {
        case "rock":
            ans1="paper"; ans2="spock";
            break;
        case "paper":
            ans1="scissors"; ans2="lizard"
            break;
        case "scissors":
            ans1="rock"; ans2="spock"
            break;
        case "spock":
            ans1="paper"; ans2="lizard"
            break;
        case "lizard":
            ans1="rock"; ans2="scissors"
            break;
    }

    // changes hidden text to show if working 
    document.getElementById('ans1').textContent = ans1;
    document.getElementById('ans2').textContent = ans2;

            if (player1 == ans1 || player1 == ans2) {
                alert("You Won :D");
                incrementScore();
            } else if (player1 === opponentc){
                alert("Draw");
                incrementDraw();
            } else {
                alert(`Awwww.... you threw ${player1} . If only you'd chosen ${ans1} `);
                incrementWrongAnswer();
            }    
   
}



function incrementDraw() {

    let oldScore = parseInt(document.getElementById("draws").innerText);
    document.getElementById("draws").innerText = ++oldScore;

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("wins").innerText);
    document.getElementById("wins").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("loses").innerText);
    document.getElementById("loses").innerText = ++oldScore;
    
}

function imageCycle(gameType , diff){

    document.getElementById("playerimage").src="assets/images/question.jpeg";
    setTimeout(() => { document.getElementById("playerimage").src="assets/images/rock.jpg";; }, 1000);
    setTimeout(() => { document.getElementById("playerimage").src="assets/images/paper.jpg";; }, 2000);
    setTimeout(() => { document.getElementById("playerimage").src="assets/images/scissors.jpg";; }, 3000);
    setTimeout(() => { document.getElementById("playerimage").src="assets/images/question.jpeg";; }, 4000);

    document.getElementById("oppimage").src="assets/images/question.jpeg";
    setTimeout(() => { document.getElementById("oppimage").src="assets/images/rock.jpg";; }, 1000);
    setTimeout(() => { document.getElementById("oppimage").src="assets/images/paper.jpg";; }, 2000);
    setTimeout(() => { document.getElementById("oppimage").src="assets/images/scissors.jpg";; }, 3000);
    setTimeout(() => { document.getElementById("oppimage").src="assets/images/question.jpeg";; }, 4000);

    runGame(gameType , diff)
    }