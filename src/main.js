import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import Books from './components/books/books';
import BookQuotes from './components/books/book_quotes'
import Quote from './components/quotes/quote';

const ROUTES = {
  signin: SignIn,
  signup: SignUp,
  books: Books,
  bookQuotes: BookQuotes,
  quote: Quote
}

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
})

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});