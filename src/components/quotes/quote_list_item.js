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
    this.props.navigator.push({
      name: 'quote',
      bookId: this.props.bookId,
      quoteId: this.props.quoteId
    });
  },
  render: function() {
    return (
      <TouchableHighlight
        underlayColor={'gray'}
        onPress={this.onPress}
        style={styles.quoteItem}>
        <View>
          <Text style={styles.quoteBody}>
            {this.props.body}
          </Text>
        </View>
      </TouchableHighlight>
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
    fontSize: 16,
    lineHeight: 28
  }
});