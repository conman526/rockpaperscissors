// code for a Rock Paper Scissors game.
const pcChoice = ["rock", "paper", "scissors"]
let result = []; // defines the result array to store the results of each round.
let resultCount = 0; // variable which counts the 'score' of the total game.
let rpc = '';
let resultLength = result.length;

function playRound(playerSelection, computerSelection) { // function for determining who wins each round.
    rpc = pcChoice[Math.floor(Math.random() * (pcChoice.length))];
    switch (true) {
        case playerSelection == computerSelection: 
            let draw = document.createTextNode("Draw. ");
            document.getElementById("results").appendChild(draw);
            result.push('draw');
            resultCount += 0;
            break;
        case playerSelection == "rock" && computerSelection == "scissors": // all 3 conditions have the same result
        case playerSelection == "paper" && computerSelection == "rock":
        case playerSelection == "scissors" && computerSelection == "paper":
            let win = document.createTextNode("You win! ");
            document.getElementById("results").appendChild(win);
            result.push('win');
            resultCount += 1;
            break;
        default: // every other condition results in a loss
            let lose = document.createTextNode("You lose. ");
            document.getElementById("results").appendChild(lose);
            result.push('loss');
            resultCount -= 1;
            
    } 
        let winner = ''; // this variable is probably unecessary... 
        
        if (result.length >= 5 && resultCount > 0) { // This will detect when 5 rounds have played and will display who won the round. 
            // Not sure why it needs to be nested in the playRound function though.
            winner = "You ";
            let winMessage = document.createTextNode(winner + 'win! Please refresh to play again.');
            document.getElementById('winner').appendChild(winMessage);
            console.log(resultCount);
        } else if (result.length >= 5 && resultCount < 0) {
            winner = "The computer ";
            let winMessage = document.createTextNode(winner + 'wins! Please refresh to play again.');
            document.getElementById('winner').appendChild(winMessage);
            console.log(resultCount);
        } else if (result.length >= 5 && resultCount == 0) {
            winner = "Nobody ";
            let winMessage = document.createTextNode(winner + 'wins. Please refresh to play again.');
            document.getElementById('winner').appendChild(winMessage);
            console.log(resultCount);
        }
        
    
    }






let rock = document.getElementById('rock');
rock.addEventListener("click", function() {
    playRound('rock', rpc)
    
});

let paper = document.getElementById('paper');
paper.addEventListener("click", function() {
    playRound('paper', rpc)
});
let scissors = document.getElementById('scissors');
scissors.addEventListener("click", function() {
    playRound('scissors', rpc)
});


