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
let modal = document.getElementById("id01");

const showModal = () => {
  modal.style.display = "block";
};

const hideModal = () => {
  modal.style.display = "none";
};

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
