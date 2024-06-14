// Activating markdown supports
(async ({chrome, netscape}) => {

    // add Safari polyfill if needed
    if (!chrome && !netscape)
      await import("/plugin/textarea-md/custom-elements.min.js");

    const {default: HighlightedCode} =
      await import("/plugin/textarea-md/highlighted-code-FIX.min.js");

    // bootstrap a theme through one of these names
    // https://github.com/highlightjs/highlight.js/tree/main/src/styles
    HighlightedCode.useTheme("github");
  })(self);


// Hiding markdown text <pre>
function visibleMarkdownText(is_visible) {
  let mdText = document.getElementsByClassName("highlighted-code")[0];
  mdText.hidden = !is_visible;

  let defalutText = document.getElementById("text-div");
  if (is_visible) {
    defalutText.style.color = "transperent";
  } else {
    defalutText.style.color = "#333333";
  }
  
}

// Make the "Search" button small
function smallSearchButton() {
  let table = document.getElementsByClassName("fixed-table-toolbar")[0];
  table.getElementsByClassName("search")[0].classList.add("input-group-sm");
}

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

// document.getElementById("new-bin-pill").click(); // TODO: remove


// Textarea counter

let textarea = document.querySelector("textarea");
let counter = document.querySelector(".counter-current");

textarea.addEventListener("input", onInput);

function onInput(event) {
  event.target.value = event.target.value.substr(0, 100000000);
  let length = event.target.value.length;
  counter.textContent = length;
}

setTimeout(smallSearchButton, 150);

// On click to NEW BIN 
document.querySelector("#new-bin-pill").onclick = function() {
  visibleMarkdownText(document.querySelector("#md-support").checked);
};

// On click to "Markdown support" check
document.querySelector("#md-support").onclick = function() {
  if (this.checked) {
    visibleMarkdownText(true);
  } else {
    visibleMarkdownText(false);
  }
};
