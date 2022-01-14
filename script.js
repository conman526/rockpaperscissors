// code for a Rock Paper Scissors game.
/*const pcChoice = ["rock", "paper", "scissors"]
let result = []; // defines the result array to store the result.


function playRound(playerSelection, computerSelection) { // function for determining who wins each round.

    switch (true) {
        case playerSelection == computerSelection: 
            result.push("Draw");
            console.log("Draw!");
            break;
        case playerSelection == "rock" && computerSelection == "scissors": // all 3 conditions have the same result
        case playerSelection == "paper" && computerSelection == "rock":
        case playerSelection == "scissors" && computerSelection == "paper":
            result.push("Win");
            console.log("You beat the computer!");
            break;
        default: // every other condition results in a loss
            result.push("Loss");
            console.log("You lose.");
    }
}
*/
/*function game() { // function for aggregating all of the rounds.
   // for (i = 0; i < 3; i++) {
        playerInput = window.prompt("Welcome to rock, paper, scissors! This is best out of 3. Please type your choice.", "rock, paper, or scissors") // asks the player for their selection.
        playerInput = playerInput.toLowerCase(); // ensures it will take all cases of input
        //console.log(playerInput);
        let rpc = pcChoice[Math.floor(Math.random() * (pcChoice.length))]; // selects random choice from pcChoice array
        //console.log(rpc);
        if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
            playRound(playerInput, rpc); // runs the actual round
            //console.log(result[i]); 
        } else {
            return;
        }
  //  }
    if (result.length >= 1) {
        console.log("Thanks for playing! Here are the results.")
        console.log(result);
    } else {
        console.log("Invalid input. Please try again.");
    } 
//}
//game(); */
function logRock(e) {
    console.log(e);
}
let rock = document.getElementById('rock');
rock.addEventListener("click", logRock('rock')
    //playRound('rock', rpc)
    
);
console.log('test');
/*let paper = document.getElementsByClassName('paper');
paper.addEventListener('click', function() {
    playRound('paper', rpc)
});
let scissors = document.getElementsByClassName('scissors');
scissors.addEventListener('click', function() {
    playRound('scissors', rpc)
});*/