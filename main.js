// const signButton = document.querySelector("#prompt");
// const log = document.querySelector("#log");
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Rock Paper or Scissors? : ");
  return choice ? choice.toLowerCase() : null;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    drawScore++;
    console.log(`Seri! kamu ${humanChoice} dan bot ${computerChoice} `);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`Player menang! ${humanChoice} mengalahkan ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`Bot menang! ${computerChoice} mengalahkan ${humanChoice}`);
  }
}

function playGames() {
  for (let i = 1; i <= 5; i++) {
    console.log(`\n=== Ronde ${i} ===`);
    let humanChoice = getHumanChoice();
    if (!humanChoice) {
      console.log("Game dihentikan oleh user.");
      break;
    }
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(`\n=== HASIL AKHIR ===`);
  console.log(
    `Player: ${humanScore} | Bot: ${computerScore} | Draw: ${drawScore}`
  );
  if (humanScore > computerScore) console.log("Kamu pemenangnya 🎉");
  else if (computerScore > humanScore) console.log("Bot pemenangnya 🤖");
  else console.log("Hasil seri!");
}
