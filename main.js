import './style.css'

  const body = document.querySelector("body");
  const buttons = document.querySelectorAll(".btn");
  const account = document.getElementById("account");

  const decrease = () => account.textContent = parseInt(account.textContent) - 1;
  const reset = () => account.textContent = 0;
  const increase = () => account.textContent = parseInt(account.textContent) + 1;

  buttons[0].addEventListener("click", decrease);
  buttons[1].addEventListener("click", reset);
  buttons[2].addEventListener("click", increase);
