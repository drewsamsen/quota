import request from 'superagent';
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

  // curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"email":"drewsamsen@gmail.com","password":"85Reccosos37qto"}' https://glacial-mountain-4423.herokuapp.com/api/login

  auth: {
    logIn: function(username, password) {
      let path = `${rootUrl}/api/login`;
      return request.post(path)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(JSON.stringify({
          email: username,
          password: password
        }));
    }
  }
}