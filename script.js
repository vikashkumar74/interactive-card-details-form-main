"use strict";
const holderName = document.querySelector(".holder-name");
const input = document.querySelectorAll(".input");
const Name = document.querySelector(".name");
const cardNumInput = document.querySelector(".card-number");
const cardNum = document.querySelector(".card-num");
const cvcNo = document.querySelector(".cvc-no");
const expireMonth = document.querySelector(".expire-date");
const expireYear = document.querySelector(".expire-year");
const errorName = document.querySelector(".error-name");
const errorNum = document.querySelector(".error-card-num");
const errorDate = document.querySelector(".error-date");
const errorCvc = document.querySelector(".error-cvc");
const conformBtn = document.querySelector(".conform-btn");
const completeMsg = document.querySelector(".success-msg");
const right = document.querySelector(".right");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc-num");
var nameReg = /^([0-9\s])+$/;
var nameRegex = /^[a-zA-Z\s-]+$/;
// invalid name function
function invalidName(v, event) {
  if (v == "") {
    errorName.textContent = `can't be blank`;
    event.target.classList.add("error-border-color");
  } else if (!v.match(nameRegex)) {
    errorName.textContent = "Enter a valid name";
    event.target.classList.add("error-border-color");
  } else {
    errorName.textContent = "";
    event.target.classList.remove("error-border-color");
  }
}

// if value is empty
function Empty(v, e) {
  if (v == "") {
    e.textContent = `can't be blank`;
  } else {
    e.textContent = "Wrong format, numbers only";
  }
}
// invalid cardnumber function
function invalidCard(v, event) {
  const dataNum = +event.target.dataset.set + 6;
  if (!v.match(nameReg)) {
    event.target.classList.add("error-border-color");

    if (dataNum == errorNum.dataset.set) {
      Empty(v, errorNum);
    } else if (dataNum == errorDate.dataset.set || dataNum == 10) {
      Empty(v, errorDate);
    } else if (dataNum == errorCvc.dataset.set) {
      if (v == "") {
        errorCvc.textContent = `can't be blank`;
      } else {
        errorCvc.textContent = "number only";
      }
    }
  } else {
    event.target.classList.remove("error-border-color");
    if (dataNum == errorNum.dataset.set) {
      errorNum.textContent = "";
    } else if (dataNum == errorDate.dataset.set || dataNum == +10) {
      errorDate.textContent = "";
    } else if (dataNum == errorCvc.dataset.set) {
      errorCvc.textContent = "";
    }
  }
}
//  input function
const inputValue = function (event) {
  const t = event.target.dataset.set;

  const v = event.target.value;
  if (t == Name.dataset.set) {
    Name.innerHTML = v.toUpperCase();
    invalidName(v, event);
  } else if (t === cardNum.dataset.set) {
    cardNum.innerHTML = v;
    invalidCard(v, event);
  } else if (t === expireMonth.dataset.set) {
    expireMonth.innerHTML = v;
    invalidCard(v, event);
  } else if (t === expireYear.dataset.set) {
    expireYear.innerHTML = v;
    invalidCard(v, event);
  } else if (t == cvcNo.dataset.set) {
    cvcNo.innerHTML = v;
    invalidCard(v, event);
  }
};

// function to check correct input
function correctInput() {
  input.forEach((e) => {
    const data = +e.dataset.set + 6;

    if (e.value == "" || !e.value.match(nameRegex)) {
      if (data == 7) {
        errorName.textContent = `write valid Name`;
        e.classList.add("error-border-color");
        console.log("fdee");
      }
    }
    if (e.value == "" || !e.value.match(nameReg)) {
      if (data == 8) {
        errorNum.textContent = `wrong format ,number only`;
        e.classList.add("error-border-color");
        console.log("fdee");
      }

      if (data == 9 || data == 10) {
        errorDate.textContent = `wrong format ,number only`;
        e.classList.add("error-border-color");
        console.log("fdee");
      }
      if (data == 11) {
        errorCvc.textContent = `wrong format`;
        e.classList.add("error-border-color");
        console.log("fdee");
      }
    }
  });
  if (
    holderName.value.match(nameRegex) &&
    cardNumInput.value.match(nameReg) &&
    month.value.match(nameReg) &&
    year.value.match(nameReg) &&
    cvc.value.match(nameReg)
  ) {
    console.log("fdee");
    right.style.display = "none";
    completeMsg.style.display = "flex";
  }
}

input.forEach((e) => e.addEventListener("input", inputValue));
conformBtn.addEventListener("click", correctInput);
