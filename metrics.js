'use strict';

function send(applicationName, serviceName) {

   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'internalmetrics.com/event');
   xhr.setHeader('Content-Type', 'application/json');
   xhr.send({
   "time": Date.now(),
   "level": serviceName,
   "service_name": applicationName
   })
};

export {send}
