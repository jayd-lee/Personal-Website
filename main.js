//Loader




//NAVBAR
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

//rotating text

"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);

// DARKMODE

const light = document.getElementById('light-switch');
let onOff = false;

light.addEventListener('change', () => {
  
	document.getElementById("main__content").classList.toggle('light');
  document.getElementById("base").classList.toggle('light');
  document.getElementById("bulb").classList.toggle('light');
  document.getElementById("glow").classList.toggle('light');
  document.getElementById("darkmode").classList.toggle('light');
  document.getElementById("flash").classList.toggle('light');
  document.getElementById("main").classList.toggle('light');
  document.getElementById("hero-wrapper").classList.toggle('light');
  document.getElementById("notmain").classList.toggle('light');
  document.getElementById("navbar").classList.toggle('light');
  document.getElementById("social-icons").classList.toggle('light');
  

  /*
  if(onOff == false) {
    document.getElementById("mainContentID").style.opacity = "0.1";
    onOff = true;
  }
  else if(onOff) {
    document.getElementById("mainContentID").style.opacity = "1";
    onOff = false;
  }
  */
  

});

//LIGHTSWITCH

$(document).ready(function(){
  setTimeout(function(){
    $('#light-switch').trigger('click');
  },500);
  setTimeout(function(){
    $('#light-switch').trigger('click');
  },1000)
});