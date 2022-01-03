let User_Choice = "";
let Computerchoice = ["rock", "paper", "scissor"];
let c_choice = "";
let win = 0;
let lose = 0;
let draw = 0;
document.getElementById("Wins").innerHTML = win.toString();
document.getElementById("Loses").innerHTML = lose.toString();
document.getElementById("Draws").innerHTML = draw.toString();
document.getElementById("rock").onclick = function () {
  User_Choice = "rock";
  setspan("UserChoice", User_Choice);
  something();
};
document.getElementById("paper").onclick = function () {
  User_Choice = "paper";
  setspan("UserChoice", User_Choice);
  something();
};
document.getElementById("scissor").onclick = function () {
  User_Choice = "scissor";
  setspan("UserChoice", User_Choice);
  something();
};
function setspan(id, Choice) {
  document.getElementById(id).innerHTML = Choice;
}
let Comp_Choice = function () {
  c_choice = Computerchoice[(Math.random() * 2).toFixed()];
  setspan("ComputerChoice", c_choice);
};
function something() {
  Comp_Choice();
  console.log(User_Choice, c_choice);
  console.log(typeof User_Choice, typeof c_choice);
  if (User_Choice === c_choice) {
    document.getElementById("result").innerHTML = "Tie";
    draw += 1;
  } else if (User_Choice === "rock" && c_choice === "paper") {
    document.getElementById("result").innerHTML = "Lose";
    lose += 1;
  } else if (User_Choice === "rock" && c_choice === "scissor") {
    document.getElementById("result").innerHTML = "Win";
    win += 1;
  } else if (User_Choice === "paper" && c_choice === "rock") {
    document.getElementById("result").innerHTML = "Win";
    win += 1;
  } else if (User_Choice === "paper" && c_choice === "scissor") {
    document.getElementById("result").innerHTML = "Lose";
    lose += 1;
  } else if (User_Choice === "scissor" && c_choice === "rock") {
    document.getElementById("result").innerHTML = "Lose";
    lose += 1;
  } else if (User_Choice === "scissor" && c_choice === "paper") {
    document.getElementById("result").innerHTML = "Win";
    win += 1;
  }
  document.getElementById("Wins").innerHTML = win.toString();
  document.getElementById("Loses").innerHTML = lose.toString();
  document.getElementById("Draws").innerHTML = draw.toString();
}
