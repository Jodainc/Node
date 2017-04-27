'use strict'
var EventEmitterr = require('events').EventEmitter,
	pub = new EventEmitterr();

   pub.on('event',function(message){
   	console.log(' message is  '+ message);
   });

   pub.once('event', function(message){
           console.log('Primera vez del evento '+ message);
   });

pub.emit('event','i am Lord');
pub.emit('event', 'i am the overlord')
pub.removeAllListeners('event');
