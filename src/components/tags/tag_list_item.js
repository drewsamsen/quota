'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

module.exports = React.createClass({
  onPress: function() {
    this.props.navigator.push({name: 'tagQuotes', tagName: this.props.name});
  },
  render: function() {
    return (
      <TouchableHighlight
        underlayColor={'gray'}
        onPress={this.onPress}
        style={styles.tagItem}>
        <View>
          <Text style={styles.tagName}>{this.props.name}</Text>
          <Text style={styles.tagCount}>{this.props.count} quotes</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

const styles = StyleSheet.create({
  tagItem: {
    padding: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#CCCCCC'
  },
  tagName: {
    fontSize: 16,
    lineHeight: 17
  },
  tagCount: {
    fontSize: 11,
    color: '#777777'
  }
});