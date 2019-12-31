function $(thing) {
  let yo = document.querySelector(thing);
  return yo;
}

function convertSeconds(s) {
  let minutes = Math.floor(s/60);
  let seconds = s % 60;

  if (seconds.toString().length === 1) {
    seconds = '0' + seconds.toString();
  }
  time = minutes.toString() + ':' + seconds.toString();
  return time;
}

function convertMinutes(mins) {
  let a = mins.split(':');
  minutes = parseInt(a[0]);
  seconds = parseInt(a[1]);
  return (minutes * 60 + seconds);
}

//select('#thing').innerHTML = '60';

function readOutLoud(message) {
  var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
  speech.text = message;
  speech.volume = 10;
  speech.rate = 1;
  speech.pitch = 10;

  window.speechSynthesis.speak(speech);
}

function timeEvent() {
  let hi = $('#thing');

  if(convertMinutes(hi.innerHTML) > 0) {
    let the = convertMinutes(hi.innerHTML) - 1;
    let time = convertSeconds(the);
    hi.innerHTML = time;
  } else {
    readOutLoud('Happy New Year!');
    $('#sound').play();
    clearInterval(interval);

  }
}


function alertMe() {
  let huh = prompt("Enter Starting Time:      ex. 60:00");
  $('#thing').innerHTML = huh;
  let interval = setInterval(timeEvent, 1000);
}




$('button').onclick = alertMe;
