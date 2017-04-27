'use strict'


var stdin = process.stdin,
      stdout = process.stdout,
      person = {
      	name : null ,
      	age : 0
      };

 function saveName(name,o){
   person.name = name;

   var question =  'Hola' +  person.name + 'Cuantos anos tienes'+ o;
   quiz(question,saveAge)
 };
 function saveAge(age,o){
   person.age = age;
   stdout.write(  'Tienes' +  person.age + 'anos' + o);
 
 };

function quiz (question,callback){

	stdin.resume();
	stdout.write(question + '  : ');
	stdin.once('data',function (res,val){
		callback(res.toString().trim(),5);
	});
}
	stdin.setEncoding('utf8');
	 quiz('Cual es tu nombre : ',saveName);