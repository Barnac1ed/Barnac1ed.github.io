var r = document.querySelector(":root");
var theme = 1;
let colorpal = "beige";
var btn = document.getElementById("h");
var img = document.getElementById("i-mg");
var ico = document.querySelector("link[rel*='icon']");

var currentTheme = localStorage.getItem("currentTheme");
if (currentTheme == "beige") {
  localStorage.setItem("currentTheme", "beige");
  beigeTheme();
  theme = 1;
} else if (currentTheme == "kawaii") {
  kawaiiTheme();
  theme = 2;
} else if (currentTheme == "black") {
  blackTheme();
  theme = 3;
}

function beigeTheme() {
  colorpal = "beige";
  btn.textContent = `current theme: ${colorpal}`;

  r.style.setProperty("--accent", "#E7D7CB");
  r.style.setProperty("--bg", "#BBADA1");
  r.style.setProperty("--box-bg", "#AA9D94");
  r.style.setProperty("--accent-hover", "#E7D7CB3");
  r.style.setProperty("--text", "#F7EDE2");

  img.src = "assets/beige-img.png";

  ico.type = "image/x-icon";
  ico.rel = "icon";
  ico.href = "assets/favicon.ico";
}

function kawaiiTheme() {
  colorpal = "kawaii";
  btn.textContent = `current theme: ${colorpal}`;

  r.style.setProperty("--accent", "#ffdaf5");
  r.style.setProperty("--bg", "#b0e1ff");
  r.style.setProperty("--box-bg", "#a4d0e9");
  r.style.setProperty("--accent-hover", "#e6c6ff");
  r.style.setProperty("--text", "mintcream");

  img.src = "assets/kawaii-img.png";

  ico.type = "image/x-icon";
  ico.rel = "icon";
  ico.href = "assets/kawaii-favicon.ico";
}

function blackTheme() {
  colorpal = "black";
  btn.textContent = `current theme: ${colorpal}`;

  r.style.setProperty("--accent", "#46484F");
  r.style.setProperty("--bg", "#2B2D35");
  r.style.setProperty("--box-bg", "#23252D");
  r.style.setProperty("--accent-hover", "#3A3C44");
  r.style.setProperty("--text", "#52545c");

  img.src = "assets/black-img.png";

  ico.type = "image/x-icon";
  ico.rel = "icon";
  ico.href = "assets/black-favicon.ico";
}

function changeTheme() {
  if (theme >= 3) {
    theme = 1;
  } else {
    theme++;
  }
  if (theme == 1) {
    beigeTheme();
    localStorage.setItem("currentTheme", "beige");
  } else if (theme == 2) {
    kawaiiTheme();
    localStorage.setItem("currentTheme", "kawaii");
  } else {
    blackTheme();
    localStorage.setItem("currentTheme", "black");
  }
}
