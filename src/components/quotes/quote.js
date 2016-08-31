'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  AsyncStorage
} from 'react-native';
import LoadScreen from '../common/load_screen';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      quote: null,
      book: null
    }
  },
  componentWillMount: function() {
    AsyncStorage.getItem(`@quota:book:${this.props.route.bookId}`)
    .then((bookJson) => {
      this.setState({book: JSON.parse(bookJson)});
    });
    AsyncStorage.getItem(
      `@quota:book:${this.props.route.bookId}:quote:${this.props.route.quoteId}`
    )
    .then((quoteJson) => {
      this.setState({quote: JSON.parse(quoteJson)});
    });
  },
  render: function() {
    if (!this.state.quote || !this.state.book) {
      return <LoadScreen />;
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.quote}>{this.state.quote.body}</Text>
            <Text style={styles.book}>{this.state.book.name}</Text>
            <Text style={styles.author}>{this.state.book.author}</Text>
          </View>
        </ScrollView>
      );
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  quote: {
    padding: 30,
    fontSize: 17,
    lineHeight: 30
  },
  book: {
    paddingTop: 30,
    alignItems: 'flex-start',
    fontSize: 14
  },
  author: {
    alignItems: 'flex-start',
    fontSize: 11,
    color: '#777777'
  }
});