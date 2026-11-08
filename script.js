function getComputerChoice(max = 3) {
  let results = Math.floor(Math.random() * max);
  
  if (results === 0) {
    return "rock";
  } else if (results === 1) {
    return "paper";
  } else if (results === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What you choose ?");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let cleanInput = humanChoice.toLowerCase();
  
  if (cleanInput === computerChoice) {
    console.log("It's a tie!"); // เสมอกัน
  } 
  // เงื่อนไขที่คุณถาม: คอมพิวเตอร์ชนะ
  else if (
    (cleanInput === "rock" && computerChoice === "paper") ||
    (cleanInput === "paper" && computerChoice === "scissors") ||
    (cleanInput === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${cleanInput}`);
  } 
  // เงื่อนไขอื่นๆ: ผู้เล่นชนะ
  else {
    humanScore++;
    console.log(`You win! ${cleanInput} beats ${computerChoice}`);
  }
}

function playGame(){
  for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

playGame();

