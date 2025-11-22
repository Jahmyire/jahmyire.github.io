'use strict';

var answer = Math.round(Math.random() * 20);
var score = Number(document.querySelector('.score').textContent);
var highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (guess === answer) {
    document.querySelector('.message').textContent = 'YOU GOT IT CORRECT🤯';
    document.querySelector('.number').textContent = answer;
    score += 5;
    document.querySelector('.score').textContent = score;
    answer = Math.round(Math.random() * 20);
    document.querySelector('body').style.background = 'green';
  } else if (!guess) {
    document.querySelector('.message').textContent = 'Please enter number👍';
  } else if (guess > answer) {
    document.querySelector('.message').textContent =
      'Woah there bud...think smaller🐜';
    score -= 4;
    document.querySelector('.score').textContent = score;
  } else if (guess < answer) {
    document.querySelector('.message').textContent =
      'Wrong. Go big or go home💪';
    score -= 4;
    document.querySelector('.score').textContent = score;
  }

  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  if (score < 0) {
      score = 20;
    document.querySelector('.message').textContent =
      'You lost. Score has been reset';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.background = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').textContent = '?';
});

function writeCookie(key, value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = key + '=' + value + ';' + expires + ';path=/';
}

function readCookie(key) {
  var name = key + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
