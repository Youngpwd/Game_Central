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

// Banner Var
const bannerH1 = document.getElementById("banner-header");

// Gallery Image Var
const imgInfoOne = document.getElementById("img-des-1");
const imgInfoTwo = document.getElementById("img-des-2");
const imgInfoThree = document.getElementById("img-des-3");
const imgInfoFour = document.getElementById("img-des-4");
const imgInfoFive = document.getElementById("img-des-5");
const imgInfoSix = document.getElementById("img-des-6");
const imgInfoSeven = document.getElementById("img-des-7");
const imgInfoEight = document.getElementById("img-des-8");
const imgBoxOne = document.getElementById("box-1");
const imgBoxTwo = document.getElementById("box-2");
const imgBoxThree = document.getElementById("box-3");
const imgBoxFour = document.getElementById("box-4");
const imgBoxFive = document.getElementById("box-5");
const imgBoxSix = document.getElementById("box-6");
const imgBoxSeven = document.getElementById("box-7");
const imgBoxEight = document.getElementById("box-8");

// Galley image Arrays
const imgBoxArr = [
  imgBoxOne,
  imgBoxTwo,
  imgBoxThree,
  imgBoxFour,
  imgBoxFive,
  imgBoxSix,
  imgBoxSeven,
  imgBoxEight,
];
const imgInfoArr = [
  imgInfoOne,
  imgInfoTwo,
  imgInfoThree,
  imgInfoFour,
  imgInfoFive,
  imgInfoSix,
  imgInfoSeven,
  imgInfoEight,
];

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
}
function hideModal() {
  modalLogin.style.display = "none";
}

// sign up function
function showModalSu() {
  modalSign.style.display = "block";
}
function hideModalSu() {
  modalSign.style.display = "none";
}

// Banner Function
const randomColor = () => {
  let value = Math.floor(Math.random() * 16777215).toString(16);
  return `#${value}`;
};
const bannerEvent = () => {
  bannerH1.style.cursor = "pointer";
  bannerH1.style.color = randomColor();
};

// Gallery Functions
const imageSelectOne = () => {
  if (imgInfoArr[0].style.display == "none") {
    imgInfoArr[0].style.display = "block";
  } else {
    imgInfoArr[0].style.display = "none";
  }
};
const imageSelectTwo = () => {
  if (imgInfoArr[1].style.display == "none") {
    imgInfoArr[1].style.display = "block";
  } else {
    imgInfoArr[1].style.display = "none";
  }
};
const imageSelectThree = () => {
  if (imgInfoArr[2].style.display == "none") {
    imgInfoArr[2].style.display = "block";
  } else {
    imgInfoArr[2].style.display = "none";
  }
};
const imageSelectFour = () => {
  if (imgInfoArr[3].style.display == "none") {
    imgInfoArr[3].style.display = "block";
  } else {
    imgInfoArr[3].style.display = "none";
  }
};
const imageSelectFive = () => {
  if (imgInfoArr[4].style.display == "none") {
    imgInfoArr[4].style.display = "block";
  } else {
    imgInfoArr[4].style.display = "none";
  }
};
const imageSelectSix = () => {
  if (imgInfoArr[5].style.display == "none") {
    imgInfoArr[5].style.display = "block";
  } else {
    imgInfoArr[5].style.display = "none";
  }
};
const imageSelectSeven = () => {
  if (imgInfoArr[6].style.display == "none") {
    imgInfoArr[6].style.display = "block";
  } else {
    imgInfoArr[6].style.display = "none";
  }
};
const imageSelectEight = () => {
  if (imgInfoArr[7].style.display == "none") {
    imgInfoArr[7].style.display = "block";
  } else {
    imgInfoArr[7].style.display = "none";
  }
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

// Banner Events
bannerH1.addEventListener("mouseover", bannerEvent);
bannerH1.addEventListener("mouseout", function (event) {
  event.target.style.color = "";
});

// Gallery Events
imgBoxArr[0].addEventListener("click", imageSelectOne);
imgBoxArr[0].addEventListener("click", imageSelectOne);
imgBoxArr[1].addEventListener("click", imageSelectTwo);
imgBoxArr[2].addEventListener("click", imageSelectThree);
imgBoxArr[3].addEventListener("click", imageSelectFour);
imgBoxArr[4].addEventListener("click", imageSelectFive);
imgBoxArr[5].addEventListener("click", imageSelectSix);
imgBoxArr[6].addEventListener("click", imageSelectSeven);
imgBoxArr[7].addEventListener("click", imageSelectEight);

for (let i = 0; i < imgBoxArr.length; i++) {
  imgBoxArr[i].addEventListener("mouseout", function () {
    for (let j = 0; j < imgInfoArr.length; j++) {
      imgInfoArr[j].style.display = "none";
    }
  });
}
