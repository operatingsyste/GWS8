var language = 'none';
var install_location = 'none';
var programming = 'none';
function boot(){
  window.open('index1.html');
}

function eng(){
  language = 'english';
  console.log('language is setted to ' + language);
}

function fill(value, time, id){
  var value;
  var time;
  var id;
  setTimeout(function(){
    document.getElementById(id).innerHTML = value;
  }, time); 
}

function hindi(){
  language = 'hindi';
    console.log('language is setted to ' + language);
}

function hdd(){
  install_location = 'hdd';
}
function serverL(){
  install_location = 'server';
}
function cpp(){
  programming = 'C++';
}
function java(){
  programming = 'Java';
}

function heading(text){
  var text;
   document.getElementById('1').innerHTML = text;
}

function base(text){
  var text;
   document.getElementById('2').innerHTML = text;
}

function error(errorn){
  var errorn;
  document.getElementById('error_S').innerHTML = errorn;
} 


function con1(){
  if (language === 'english'){
   heading('Select location for installation of GWS 3');
   base('<label> <input type="radio" name="radio" onclick="hdd()"> Hard Disk </label> <br> <label> <input type="radio" name="radio" onclick="serverL()"> GWS Servers </label> <br> <button onclick="con2()"> Continue -> </button>');
   error(' ');
  }
  else if (language === 'hindi'){
    
  }
  else {
    error('!Please select a Language for continue the setup');
  }
}

function con2(){
  if (language === 'english'){
    if (install_location === 'server'){
   heading('Select a programming language for install the GWS 3');
   base('<label> <input type="radio" name="radio" onclick="cpp()"> C++ </label> <br> <label> <input type="radio" name="radio" onclick="java()"> Java </label> <br> <button onclick="con3()"> Install Now ! </button>');
   error(' ');
    }
    else if (install_location === 'hdd'){
      error("Can't boot from hdd !Please select another location");
    }
    else {
      error('!Please select a installation location');
    }
  }
  else if (language === 'hindi'){
    
  }
  else {
    error('!Please select a Language for continue the setup');
  }
}
function con3(){
  if (language === 'english'){
    if (install_location === 'server'){
      if (programming === 'C++'){
   heading('Installing with C++');
   base('Installing...');
   error(' ');
   document.getElementById('ins').innerHTML = '<div class="cpp"> <b id="t"> installing... </b></div>';
   fill('<button onclick="boot()">BOOT NOW</button>', 10000, 'ins');
   setTimeout (function(){
     heading('Installed GWS 3 with C++ on servers');
     base('installed');
   }, 10001)
      }
      else if (programming === 'Java'){
   heading('Installing with Java');
   base('Installing...');
   error(' ');document.getElementById('ins').innerHTML = '<div class="java"> <b id="t"> installing... </b></div>';
      fill('<button onclick="boot()">BOOT NOW</button>', 10000, 'ins');
        setTimeout(function() {
          heading('Installed GWS 3 with Java on servers');
          base('installed');
        },10001);
      }
      
    }
    else if (install_location === 'hdd'){
      error("Can't boot from hdd !Please select another location");
    }
    else {
      error('!Please select a installation location');
    }
  }
  else if (language === 'hindi'){
    
  }
  else {
    error('!Please select a Language for continue the setup');
  }
}