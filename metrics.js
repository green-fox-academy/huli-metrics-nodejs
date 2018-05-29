'use strict';
const fetch = require('node-fetch');

module.exports = {
  send(applicationName, serviceName) {
    return fetch('http://localhost:3000', {
      body: JSON.stringify({
        time: Date.now(),
        level: serviceName,
        service_name: applicationName,
      }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    })
    .then(response => (response.json()))
    .then(data => (data));
  },
};
