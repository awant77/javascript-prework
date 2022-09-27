const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");

rock.addEventListener("click", function () {
  const randomMove = createRandomMove();
  displayMoves(this.id, randomMove);
  displayResult(this.id, randomMove);
});
scissors.addEventListener("click", function () {
  const randomMove = createRandomMove();
  displayMoves(this.id, randomMove);
  displayResult(this.id, randomMove);
});
paper.addEventListener("click", function () {
  const randomMove = createRandomMove();
  displayMoves(this.id, randomMove);
  displayResult(this.id, randomMove);
});
