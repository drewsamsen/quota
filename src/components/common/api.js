import agent from 'superagent';
const rootUrl = 'https://glacial-mountain-4423.herokuapp.com';

module.exports = {
  users: {
    all: function() {
      let path = `${rootUrl}/users.json`;
      return fetch(path)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          return json;
        });
    }
  },

  auth: {
    logIn: function(username, password, callbacks) {
      let path = `${rootUrl}/api/login`;
      agent.post(path)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(JSON.stringify({
          email: username,
          password: password
        }))
        .then(callbacks.success, function(err) {
          console.warn('err', err);
        });
    }
  }
}