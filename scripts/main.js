// topnav var
const navVar = document.getElementById("myTopnav");
let navBars = document.getElementById("icon");

// login var
let modalLogin = document.getElementById("id01");
let login = document.getElementById("login");

// Sign Up var
let modalSign = document.getElementById("id02");
let sign = document.getElementById("sign-up");
let closeIcon = document.getElementById("close-icon-su");
let cancelBtn2 = document.getElementById("cancelbtn-2");

// topnav function
function navbar() {
  let x = navVar;
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//login function
function showModal() {
  modalLogin.style.display = "block";
};
function hideModal() {
  modalLogin.style.display = "none";
};

// sign up function
function showModalSu() {
  modalSign.style.display = "block";
};
function hideModalSu() {
  modalSign.style.display = "none";
};

// topnav events
navBars.addEventListener("click", navbar);

// login events
login.addEventListener("click", showModal);
document.getElementById("close-icon").addEventListener("click", hideModal);
document.getElementById("cancelbtn").addEventListener("click", hideModal);
window.addEventListener("click", function (event) {
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  }
});

// sign up events
sign.addEventListener("click", showModalSu);
closeIcon.addEventListener("click", hideModalSu);
cancelBtn2.addEventListener("click", hideModalSu);
window.addEventListener("click", function (event) {
  if (event.target == modalSign) {
    modalSign.style.display = "none";
  }
});
