'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ListView
} from 'react-native';

import QuoteListItem from './quote_list_item';

module.exports = React.createClass({
  renderRow(rowData) {
    return (
      <QuoteListItem
        body={rowData.body}
        quoteId={rowData.id}
        navigator={this.props.navigator}
      />
    );
  },
  render: function() {
    return (
      <ListView
        dataSource={this.props.quotes}
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