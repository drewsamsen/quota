'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
  onPress: function() {
    console.log('book id ' + this.props.bookId);
    this.props.navigator.push({name: 'bookQuotes', bookId: this.props.bookId})
  },
  render: function() {
    return (
      <TouchableHighlight
        underlayColor={'gray'}
        onPress={this.onPress}
        style={styles.bookItem}>
        <View>
          <Text style={styles.bookTitle}>{this.props.name}</Text>
          <Text style={styles.bookAuthor}>{this.props.author}</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

const styles = StyleSheet.create({
  bookItem: {
    padding: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#CCCCCC'
  },
  bookTitle: {
    fontSize: 16,
    lineHeight: 17
  },
  bookAuthor: {
    fontSize: 11,
    color: '#777777'
  }
});