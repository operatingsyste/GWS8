function inout(){
  document.getElementById('inp').innerHTML = '<input id="inp2">'
}
var _INIT_CORE_PROFILE,_DATA_INPUT_HANDLE,_GWS_OS_INIT;
function gws(ARG){
  window.open('setUp.html');
}

function check(){
  var gete = document.getElementById('inpu').value;
  
  if (gete === 'Y'){
    gws(_INIT_CORE_PROFILE, _GWS_OS_INIT);
  }
  else {
    document.getElementById('out').innerHTML = "Can't boot GWS 3 . please run setup for installation pf GWS 3 on servers";
  }
}