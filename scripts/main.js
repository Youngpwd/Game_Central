// topnav
const navVar = document.getElementById("myTopnav");

function navbar() {
  let x = navVar;
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// login
let modalLogin = document.getElementById("id01");

let login = document.getElementById("login");

function showModal() {
  modalLogin.style.display = "block";
}

function hideModal() {
  modalLogin.style.display = "none";
}

login.addEventListener("click", showModal);

document.getElementById("close-icon").addEventListener("click", hideModal);

document.getElementById("cancelbtn").addEventListener("click", hideModal);

window.addEventListener("click", function (event) {
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  }
});

// Sign Up
