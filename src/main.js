import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import Menu from './components/menu/menu';
import Books from './components/books/books';
import BookQuotes from './components/books/book_quotes'
import Quote from './components/quotes/quote';
import Tags from './components/tags/tags';
import TagQuotes from './components/tags/tag_quotes';

const ROUTES = {
  signin: SignIn,
  signup: SignUp,
  menu: Menu,
  books: Books,
  bookQuotes: BookQuotes,
  quote: Quote,
  tags: Tags,
  tagQuotes: TagQuotes
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
        initialRoute={{name: 'menu'}}
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