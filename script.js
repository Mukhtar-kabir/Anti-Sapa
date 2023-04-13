'use strict';
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btnSubmit = document.querySelector('.btn-submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  //username Validation

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  // Email Validation

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else {
    setSuccessFor(email);
  }

  // Password Validation

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (passwordValue.length < 8) {
    setErrorFor(password, 'Must be at least 8 characters long');
  } else {
    setSuccessFor(password);
  }

  // Password2 Validation

  if (password2Value === '') {
    setErrorFor(password2, 'Comfirm password');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Password mismatch');
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

const navLinkPrimary = document.querySelector('.nav__link--primary');
const signUp = document.querySelector('.sign-up');
const bodyframe = document.querySelector('.bodyframe');
const btnCloseModal = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');

const open = function (e) {
  e.preventDefault();

  bodyframe.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function (e) {
  e.preventDefault();

  bodyframe.classList.add('hidden');
  overlay.classList.add('hidden');
};
navLinkPrimary.addEventListener('click', open);
signUp.addEventListener('click', open);
overlay.addEventListener('click', close);
btnCloseModal.addEventListener('click', close);