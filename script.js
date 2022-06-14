let currentInput = document.querySelector(".currentInput");
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll("button");
let evaluate = document.querySelector("#evaluate");
let Erase = document.querySelector("#Erase");
let clear = document.querySelector("#clear");
let realTimeValue = [];

clear.addEventListener("click", () => {
  realTimeValue = [""];
  currentInput.innerHTML = realTimeValue.join("");
});
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "Erase") {
      realTimeValue.pop();
      currentInput.innerHTML = realTimeValue.join("");
      return;
    }
    realTimeValue.push(button.value);
    currentInput.innerHTML = realTimeValue.join("");
  });

  evaluate.addEventListener("click", () => {
    currentInput.innerHTML = eval(currentInput.innerText);
  });
});
