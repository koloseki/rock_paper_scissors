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

    const resultName = document.querySelector('#resultName');
    const resultScore = document.querySelector('#resultScore');

    
    

    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper Beat Rock");
        resultName.textContent = 'You lose! Paper Beat Rock';
        cp++;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper Beat Rock");
        resultName.textContent = 'You Win! Paper Beat Rock'; 
        pp++;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock Beat Scissors");
        resultName.textContent = 'You Win! Rock Beat Scissors'; 
        pp++;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose! Rock Beat Scissors");
        resultName.textContent = 'You lose! Rock Beat Scissors'; 
        cp++;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose! Scissors Beat paper");
        resultName.textContent = 'You lose! Scissors Beat paper'; 
        cp++;
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors Beat paper");
        resultName.textContent = 'You Win! Scissors Beat paper'; 
        pp++;
    }
    else{
        console.log("Draw");
        resultName.textContent = 'Draw';
    }
    console.log("YOU: "+ pp + " COMPUTER: " + cp);
    resultScore.textContent = "YOU: "+ pp + " COMPUTER: " + cp;

    if(pp == 5){
        alert("You Win!"); //if player win 5 times, alert will pop up
        pp = 0;
        cp = 0;
    
        }else if(cp == 5){
            alert("You Lose!"); //if computer win 5 times, alert will pop up
            resultName.textContent = '';
            resultScore.textContent = ''
            pp = 0;
            cp = 0;
        }
   
    
  }

  


  function game(selecttedBtn){
        const computerSelection = getComputerChoice();
        const playerChoose = selecttedBtn;
        let playerSelection = playerChoose.toLowerCase();      
        console.log(playRound(playerSelection, computerSelection));
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    game('rock');
});

paper.addEventListener('click', () => {
    game('paper');
});

scissors.addEventListener('click', () => {
    game('scissors');
});

