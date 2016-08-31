'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  ListView,
  Text
} from 'react-native';

import LoadScreen from '../common/load_screen';
import Api from '../common/api';
import TagList from './tag_list';

module.exports = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
    return {
      tags: ds.cloneWithRows([]),
      tagsLoaded: false
    };
  },
  componentWillMount: function() {
    setTimeout(() => { this.fetchTags(); }, 500);
  },
  fetchTags: function() {
    Api.tags.all({
      success: (response) => {
        if (response.body.error) {
          console.warn(response.body);
        } else if (response.body.tags) {
          // response.body.tags.map(this.cacheTags);
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
          this.setState({
            tags: ds.cloneWithRows(response.body.tags),
            tagsLoaded: true
          });
        }
      }
    })
  },
  render: function() {
    if (!this.state.tagsLoaded) {
      return <LoadScreen />
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <TagList
              tags={this.state.tags}
              navigator={this.props.navigator}
            />
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