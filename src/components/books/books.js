'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  ScrollView,
  ListView
} from 'react-native';

import Api from '../common/api';
import BookList from './booklist';
import LoadScreen from '../common/load_screen';

module.exports = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
    return {
      user: null,
      books: ds.cloneWithRows([]),
      booksLoaded: false
    };
  },
  componentWillMount: function() {
    AsyncStorage.getItem('@quota:user:email')
    .then((value) => {
      this.setState({user: value});
    });
    setTimeout(() => { this.fetchBooks(); }, 1000);
  },
  fetchBooks: function() {
    Api.books.all({
      success: (response) => {
        if (response.body.error) {
          this.setState({errorMessage: response.body.error});
        } else if (response.body.books) {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
          this.setState({
            books: ds.cloneWithRows(response.body.books),
            booksLoaded: true
          });
        }
      }
    });
  },
  render: function() {
    if (this.state.user == null || !this.state.booksLoaded) {
      return <LoadScreen />;
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <Text>Welcome back, {this.state.user}!</Text>
            <BookList books={this.state.books} />
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
    paddingTop: 20
  }
});