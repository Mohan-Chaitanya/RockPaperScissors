let items = ["rock", "paper", "scissors"];

function computerPlay() {
  let randomIndex = parseInt(Math.random() * 3);
  return items[randomIndex];
}
var player;
var computer;

let computerCount = 0,
  playerCount = 0,
  gameCount = 0;

function singleRound(playerChoise, computerChoise) {
  player = playerChoise;
  computer = computerChoise;
  playerinputs.textContent =
    "player chose :  " + player + "  & Computer Chose : " + computer;
  gameCount++;
  if (player === computer) {
    output.textContent = "Its a Tie match buddies";
  } else if (player === "rock") {
    if (computer === "paper") {
      output.textContent = "Computer Won";
      computerCount++;
    } else {
      output.textContent = "Player Won";
      playerCount++;
    }
  } else if (player === "paper") {
    if (computer === "scissors") {
      output.textContent = "Computer Won";
      computerCount++;
    } else {
      output.textContent = "Player Won";
      playerCount++;
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      output.textContent = "Computer Won";
      computerCount++;
    } else {
      output.textContent = "Player Won";
      playerCount++;
    }
  }
  score.textContent =
    "Player score is : " +
    playerCount +
    "---Computer score is: " +
    computerCount;
  if (gameCount === 5) {
    disableFunction();
    if (playerCount > computerCount) {
      winner.textContent = "Yayyy player Won this match";
    } else if (playerCount === computerCount) {
      winner.textContent = "Hmm its a tie match guys";
    } else {
      winner.textContent = "Oops man the Computer beats you this time";
    }
  }
}

function disableFunction() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function refresh() {
  window.location.reload();
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#reset");

rock.addEventListener("click", () => singleRound("rock", computerPlay()));
paper.addEventListener("click", () => singleRound("paper", computerPlay()));
scissors.addEventListener("click", () => singleRound("paper", computerPlay()));
reset.addEventListener("click", () => refresh());

const result = document.querySelector("#results");
const playerinputs = document.createElement("h3");
const output = document.createElement("h3");
const winner = document.createElement("h1");
const score = document.createElement("h2");

result.appendChild(playerinputs);
result.appendChild(output);
result.appendChild(score);
result.appendChild(winner);
