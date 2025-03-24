import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'My cousin', 'My bird', 'My brother', 'The neighbor'];
let action = ['ate', 'peed', 'crushed', 'broke', 'throw away'];
let what = ['my homework', 'my phone', 'my laptop', 'the TV'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying', 'while I was on the bathroom'];

function getRandomNumber (length) {
  return Math.floor(Math.random() *(length-1));

}

function sortRandomExcuse (anyArray) { 
  let random = getRandomNumber(anyArray.length);
  return anyArray[random];
}


window.onload = function() {

  const myExcuse = document.getElementById('myExcuses')
  myExcuse.innerHTML = sortRandomExcuse(who) + ' ' + sortRandomExcuse(action) + ' ' + sortRandomExcuse(what) + ' ' + sortRandomExcuse(when)
};
