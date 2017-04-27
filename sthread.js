'use strict';
process.argv[2]= 'Hola Lord';
process.argv[3]= '12';

function sigleThread(){
console.log("hola");
console.log('proceso ' + process.pid);
console.log('titulo '+process.title);
console.log('titulo '+process.execPath);
console.log('titulo '+process.cwd());
console.log('titulo '+process.versions);
console.log('titulo '+process.platform);
console.log('titulo '+process.argv);
for( var a in process.argv){
	console.log(' '+process.argv[a] );			
}
};
sigleThread();