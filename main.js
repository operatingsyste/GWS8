setTimeout(function(){
  document.getElementById('osboot1').innerHTML = '<div id="booting"><div class="ball-spin mat02"></div>booting...</div>';
}, 10000);

setTimeout(function(){
  document.getElementById('osbo').innerHTML = '<div> <b> booting from disk <b id="proc_">0</b> % </b></div>';
}, 13000);

setTimeout(function() {
  document.getElementById('proc_').innerHTML = '10';
}, 13023);

setTimeout(function() {
  document.getElementById('proc_').innerHTML = '30';
},14000);

setTimeout(function() {
  document.getElementById('proc_').innerHTML = '50';
}, 15000);

setTimeout(function() {
  document.getElementById('proc_').innerHTML = '70';
}, 16000);

setTimeout(function() {
  document.getElementById('proc_').innerHTML = '90';
}, 17000);

setTimeout(function() {
  document.getElementById('proc_').innerHTML = '100';
}, 18000);

function initDesktop(){
  document.getElementById('proc_').innerHTML = '<a href="desktop.html" id="fac0s"> opening... </a>"';
}
function openDesktop(){
  document.getElementById('fac0s').click();
}
setTimeout(function() {
  initDesktop();
  openDesktop();
}, 19000);