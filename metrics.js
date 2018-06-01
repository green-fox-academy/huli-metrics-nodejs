'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

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
    .then((response) => {
      if(ponse.status != 200) {
        throw new Error('Bad response :(')
      } else {
      (response.json())
      }
    })
    .then(data => (data));
  },
};
