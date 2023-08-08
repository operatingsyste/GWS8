function home(){
  window.open('settings.html');
}

function osinfo(){
  window.open('osInfo.html');
}


function gws8() {
  window.open('gws8.html');
}

function gws8_logo_remove() {
  window.open('lite.html');
}

function osTasking(){
  window.open('ostasking.html');
}

function checkForUpdates(){
  document.getElementById('h1').innerHTML = 'Checking...';
  setTimeout(function(){
    document.getElementById('h1').innerHTML = ' ';
    alert('OS already has latest version');
  }, 2000);
}

function bios(){
  window.open('https://operatingsyste.github.io/BIOSGWS/'); 
}

function Sboot(){
  window.open('Sboot.html')
}

function reboot(){
  window.open('index.html');
}

function framesTasking(){
  window.open('SframeTasking.html')
}

function fps120(){
  var a = confirm('120+ FPS needs more hadrware usage and that may harm your device . Do you really want to set 120+ fps. You can set 90 fps if you have a medium or high device if you have a normal device so 60 fps is better option');
  if(a){
    
  }
  else {
    document.getElementById('inpR').click();
  }
}

function reins(){
  window.open("https://operatingsyste.github.io/GWS8SETUP/");
}
