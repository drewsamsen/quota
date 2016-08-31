'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.bookItem}>
        <Text style={styles.bookTitle}>{this.props.name}</Text>
        <Text style={styles.bookAuthor}>{this.props.author}</Text>
      </View>
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