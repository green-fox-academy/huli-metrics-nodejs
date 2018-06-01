'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = {
  send(applicationName, serviceName) {
    return fetch('http://52.47.59.43/event', {
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
    .then((response) => {
      if(response.status != 200) {
        throw new Error('Bad response :(')
      } else {
      (response.json())
      }
    })
    .then(data => (data));
  },
};
