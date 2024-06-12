// Start main page
switch(window.location.pathname) {
  case "/new-bin":
    document.getElementById("new-bin-pill").click();
    break;
  case "/my-bins":
    document.getElementById("my-bins-pill").click();
    break;
  case "/account":
    document.getElementById("account-pill").click();
    break;
  default:
    document.getElementById("home-pill").click();
}

document.getElementById("new-bin-pill").click(); // TODO: remove


let textarea = document.querySelector("textarea");
let counter = document.querySelector(".counter-current");

textarea.addEventListener("input", onInput);

function onInput(event) {
  event.target.value = event.target.value.substr(0, 100000000);
  let length = event.target.value.length;
  counter.textContent = length;
}
