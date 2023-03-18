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
    const resultPlayer = document.querySelector('#resultPlayer');
    const playerIcon = document.querySelector('#playerIcon');
    const computerIcon = document.querySelector('#computerIcon');
    
    

    if(playerSelection == "rock" && computerSelection == "paper"){
        resultName.textContent = 'You lose! Paper Beat Rock';
        playerIcon.src = `img/${playerSelection}.png`;
        computerIcon.src = `img/${computerSelection}.png`;
        cp++;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        resultName.textContent = 'You Win! Paper Beat Rock'; 
        playerIcon.src = `img/${playerSelection}.png`;
        computerIcon.src = `img/${computerSelection}.png`;
        pp++;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        resultName.textContent = 'You Win! Rock Beat Scissors'; 
        playerIcon.src = `img/${playerSelection}.png`;
        computerIcon.src = `img/${computerSelection}.png`;
        pp++;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        resultName.textContent = 'You lose! Rock Beat Scissors'; 
        playerIcon.src = `img/${playerSelection}.png`;
        computerIcon.src = `img/${computerSelection}.png`;
        cp++;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        resultName.textContent = 'You lose! Scissors Beat paper';
        playerIcon.src = `img/${playerSelection}.png`;
        computerIcon.src = `img/${computerSelection}.png`; 
        cp++;
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        resultName.textContent = 'You Win! Scissors Beat paper'; 
        playerIcon.src = `img/${playerSelection}.png`;
        computerIcon.src = `img/${computerSelection}.png`;
        pp++;
    }
    else{
        resultName.textContent = 'Draw';
        playerIcon.src = `img/${playerSelection}.png`;
        computerIcon.src = `img/${computerSelection}.png`;
    }

    if(pp >= 5){
        alert("You Win!"); //if player win 5 times, alert will pop up
        resultName.textContent = 'Choose what you play';
    playerIcon.src = `img/questionMArk.png`;
        computerIcon.src = `img/questionMArk.png`;        pp = 0;
        cp = 0;
    
        }else if(cp >= 5){
            alert("You Lose!"); //if computer win 5 times, alert will pop 
            resultName.textContent = 'Choose what you play';
        playerIcon.src = `img/questionMArk.png`;
        computerIcon.src = `img/questionMArk.png`;
            pp = 0;
            cp = 0;
        }


    console.log("YOU: "+ pp + " COMPUTER: " + cp);
    resultPlayer.textContent = " "+ pp ;
    resultComputer.textContent =" " + cp;



    
   
    
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

