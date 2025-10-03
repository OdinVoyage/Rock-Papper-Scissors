const result = document.querySelector("#result");
const log = document.querySelector("#log");
const logMatch = document.querySelector("#log-match");

let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(choice) {
  return choice;
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
  let message = `\n=== Round ${round} ===\n`;

  if (humanChoice === computerChoice) {
    message += `Draw! you ${humanChoice} and bot ${computerChoice} \n`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    message += `Player won! ${humanChoice} defeat ${computerChoice} \n`;
  } else {
    computerScore++;
    message += `Bot won! ${computerChoice} defeat ${humanChoice} \n`;
  }

  const span = document.getElementById("span-" + round);
  if (span) {
    span.textContent = message;
  }
  round++;

  if (round > 5) return playGames();
}

function playGames() {
  let message = `\n=== Final Result ===`;
  message += `Player: ${humanScore} | Bot: ${computerScore} `;
  if (humanScore > computerScore) message += " player won 🎉";
  else if (computerScore > humanScore) message += " Bot won 🤖";
  else message += "Score Draw!";

  document.getElementById("log-match").textContent = message;

  for (let i = 1; i <= 5; i++) {
    const span = document.getElementById("span-" + i);
    setTimeout(() => {
      if (span) span.textContent = "";
      document.getElementById("log-match").textContent = "";
    }, 1500);
  }

  round = 1;
  humanScore = 0;
  computerScore = 0;
}

