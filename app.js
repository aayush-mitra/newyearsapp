function select(thing) {
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
  speech.volume = 500;
  speech.rate = 1;
  speech.pitch = 10;

  window.speechSynthesis.speak(speech);
}

function doStuff() {
  $('.fireworks').fireworks();
}



function timeEvent() {
  let hi = select('#thing');
  if (convertMinutes(hi.innerHTML) === 55) {
    select('#sound').play();
  }


  if(convertMinutes(hi.innerHTML) > 0) {
    let the = convertMinutes(hi.innerHTML) - 1;
    let time = convertSeconds(the);
    hi.innerHTML = time;
  } else {

    readOutLoud('Happy New Year!');
    select('#thing2').innerHTML = 'Happy New Year!!!'
    hi.innerHTML = '2021 LETS GOOOO'
    //clearInterval(interval);

  }
}


function alertMe() {

  let interval = setInterval(timeEvent, 1000);
  setTimeout(doStuff, convertMinutes(select('#thing').innerHTML) * 1000);
}

let thetime = prompt("Starting Time: ");
select('#thing').innerHTML = thetime;


select('button').onclick = alertMe;
