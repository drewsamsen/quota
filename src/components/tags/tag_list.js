'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ListView,
} from 'react-native';

import TagListItem from './tag_list_item';

module.exports = React.createClass({
  renderRow(rowData) {
    return (
      <TagListItem
        name={rowData.name}
        count={rowData.taggings_count}
        tagId={rowData.id}
        navigator={this.props.navigator}
      />
    );
  },
  render: function() {
    return (
      <ListView
        dataSource={this.props.tags}
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