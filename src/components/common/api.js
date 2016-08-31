import agent from 'superagent';
const rootUrl = 'https://glacial-mountain-4423.herokuapp.com';

const handleErr = (err) => {
  console.warn('err', err);
}

module.exports = {

  auth: {
    logIn: function(username, password, callbacks) {
      const path = `${rootUrl}/api/login`;
      agent.post(path)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(JSON.stringify({
          email: username,
          password: password
        }))
        .then(callbacks.success, handleErr);
    }
  },

  books: {
    all: function(callbacks) {
      const path = `${rootUrl}/api/books`;
      agent.get(path)
        .then(callbacks.success, handleErr);
    },
    bookQuotes: function(bookId, callbacks) {
      const path = `${rootUrl}/api/books/${bookId}/quotes`;
      agent.get(path)
        .then(callbacks.success, handleErr);
    }
  },

  tags: {
    all: function(callbacks) {
      const path = `${rootUrl}/api/tags`;
      agent.get(path)
        .then(callbacks.success, handleErr);
    },
    tagQuotes: function(tagName, callbacks) {
      const path = `${rootUrl}/api/quotes/${tagName}`;
      agent.get(path)
        .then(callbacks.success, handleErr);
    }
  }
}