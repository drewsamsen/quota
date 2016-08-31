'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

module.exports = React.createClass({
  onPress: function() {
    this.props.navigator.push({name: 'bookQuotes', bookId: this.props.bookId})
  },
  render: function() {
    return (
      <View style={styles.quoteItem}>
        <Text style={styles.quoteBody}>{this.props.body}</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  quoteItem: {
    padding: 22,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#CCCCCC'
  },
  quoteBody: {
    fontSize: 15,
    lineHeight: 24
  }
});