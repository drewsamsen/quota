'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native';

module.exports = React.createClass({
  renderRow(rowData) {
    return (
      <View style={styles.bookItem}>
        <Text style={styles.bookTitle}>{rowData.name}</Text>
        <Text style={styles.bookAuthor}>{rowData.author}</Text>
      </View>
    );
  },
  render: function() {
    return (
      <ListView
        dataSource={this.props.books}
        renderRow={this.renderRow}
      />
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
    fontSize: 20
  },
  bookAuthor: {
    fontSize: 14
  }
});