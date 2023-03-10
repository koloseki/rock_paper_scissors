function getComputerChoice(){
    let computer_choose = Math.floor(Math.random() * 3) + 1; //random generated variable for random outcome
    
    switch (computer_choose) {
        case 1:
            console.log("Computer plays rock");
            return("rock");
        case 2:
            console.log("Computer plays paper");
            return("paper");
        case 3:
            console.log("Computer plays scissors");
            return("scissors");
        default:
            console.log("what?");
            break;
    }
}


let pp = 0, cp = 0;          //declares a variable that counts how many time someone win  



function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper Beat Rock");
        cp++;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper Beat Rock");
        pp++;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock Beat Scissors");
        pp++;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose! Rock Beat Scissors");
        cp++;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose! Scissors Beat paper");
        cp++;
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors Beat paper");
        pp++;
    }
    else{
        console.log("Draw");
    }
    console.log("YOU: "+ pp + " COMPUTER: " + cp);
  }

  function game(){
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerChoose = prompt("Choose: rock , paper ,scissors");
        let playerSelection = playerChoose.toLowerCase();      
        console.log(playRound(playerSelection, computerSelection));
    }
}



game();