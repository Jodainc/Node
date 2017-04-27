 "use strict";
 /* jshint node: true */
/*jshint devel:true */ 
/* jshint browser: true */
function executeCode(e){
	switch (e.target.id) {
		case 'mib':
			prinMessage('es este obj',e.target.id);
			timeRi();
			break;
			case 'mib1':
			prinMessage('es este obj',e.target.id);
			break;
			case 'mib2':
			prinMessage('es este obj',e.target.id);
			break;
			case 'mib3':
			prinMessage('es este obj',e.target.id);
			break;
		default:
			prinMessage('no existe obj',e.target.id);
			break;
	}
}
function prinMessage(message,input){
console.log(message+'  ' +  input);
}
function timeRi(){
   var time =document.getElementById("time");
  time.innerHTML= Date();
}
function jsOpen(e){
	console.log(e);
 var bt1= document.getElementById("mib");
  var bt2= document.getElementById("mib1");
   var bt3= document.getElementById("mib2");
    var bt4 = document.getElementById("mib3");
 bt1.onclick=executeCode;
bt2.onclick=executeCode;
bt3.onclick=executeCode;
bt4.onclick=executeCode;
}
window.onload = jsOpen;