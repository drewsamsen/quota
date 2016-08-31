'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ListView
} from 'react-native';

import BookListItem from './booklistitem';

module.exports = React.createClass({
  renderRow(rowData) {
    return (
      <BookListItem
        name={rowData.name}
        author={rowData.author}
        bookId={rowData.id}
        navigator={this.props.navigator}
      />
    );
  },
  render: function() {
    return (
      <ListView
        dataSource={this.props.books}
        renderRow={this.renderRow}
        style={styles.container}
      />
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});