let question = document.getElementById("question");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let opt = document.querySelector(".opt");
let quest = document.querySelector(".quest");
let container = document.querySelector(".container");
let nextBtn = document.getElementById("nextBtn");

let answer;
question.textContent = "What is the capital of Australia?";
opt1.textContent = "Sydney";
opt2.textContent = "Melbourne";
opt3.textContent = "Canberra";
opt4.textContent = "Perth";
answer = "Canberra";
let count = 0;
let score = 0;
let dummy;
function next() {
  count = count + 1;
  for (let i = 1; i <= 4; i++) {
    dummy = document.getElementById("opt" + i);
    dummy.style.background = "rgb(52, 214, 235)";
  }
  if (count == 1) {
    question.textContent = "Who painted the Mona Lisa??";
    opt1.textContent = "Vincent van Gogh";
    opt2.textContent = "Pablo Picasso";
    opt3.textContent = "Leonardo da Vinci";
    opt4.textContent = " Michelangelo";
    answer = "Leonardo da Vinci";
  } else if (count == 2) {
    question.textContent = "Who wrote the play 'Romeo and Juliet'?";
    opt1.textContent = "William Shakespeare";
    opt2.textContent = "Jane Austen";
    opt3.textContent = "Charles Dickens";
    opt4.textContent = "F. Scott Fitzgerald";
    answer = "William Shakespeare";
  } else {
    quest.classList.add("hidden");
    let quiz = document.createElement("h1");
    container.append(quiz);
    quiz.textContent = "Score Card";
    quiz.style.marginBottom = "10px";
    let breakEl = document.createElement("hr");
    container.append(breakEl);
    breakEl.style.marginBottom = "10px";
    let scoreCard = document.createElement("h3");
    container.append(scoreCard);
    scoreCard.textContent = "you scored " + score + " out of 3!";
    scoreCard.style.marginBottom = "20px";
    container.style.height = "30vh";
    container.style.width = "30vw";
  }
}
function option1() {
  test(opt1);
}
function option2() {
  test(opt2);
}
function option3() {
  test(opt3);
}
function option4() {
  test(opt4);
}
function test(option) {
  if (answer == option.textContent) {
    option.style.background = "green";
    score += 1;
  } else {
    option.style.background = "red";
    correct();
  }
}
function correct() {
  for (let i = 1; i <= 4; i++) {
    let currentOption = document.getElementById("opt" + i);
    if (currentOption.textContent == answer) {
      currentOption.style.background = "green";
    }
  }
}
