function createRandomMove() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "scissors";
  else if (randomNumber === 3) return "paper";
}

function displayMoves(playersMove, computersMove) {
  const playersMoveDiv = document.querySelector("#players-move");
  const computersMoveDiv = document.querySelector("#computers-move");
  playersMoveDiv.innerHTML = playersMove;
  computersMoveDiv.innerHTML = computersMove;
}

function displayResult(playersMove, computersMove) {
  const resultDiv = document.querySelector("#result");

  if (playersMove === computersMove) resultDiv.innerHTML = "Draw";
  else if (playersMove === "paper" && computersMove === "scissors")
    resultDiv.innerHTML = "You lost :(";
  else if (playersMove === "scissors" && computersMove === "rock")
    resultDiv.innerHTML = "You lost :(";
  else if (playersMove === "rock" && computersMove === "paper")
    resultDiv.innerHTML = "You lost :(";
  else resultDiv.innerHTML = "You won!";
}
