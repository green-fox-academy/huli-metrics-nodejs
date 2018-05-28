'use strict';

module.exports = {

  send(applicationName, serviceName) {
    return fetch('internalmetrics.com/event', {
      body: JSON.stringify({
        time: Date.now(),
        level: serviceName,
        service_name: applicationName
    }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    })
    .then(response => response.json());
  }
};