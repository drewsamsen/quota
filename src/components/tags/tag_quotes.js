'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  ListView
} from 'react-native';

import Api from '../common/api';
import QuoteList from '../quotes/quote_list';
import LoadScreen from '../common/load_screen';

module.exports = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
    return {
      quotes: ds.cloneWithRows([]),
      quotesLoaded: false
    };
  },
  componentWillMount: function() {
    setTimeout(() => { this.fetchTagQuotes(); }, 500);
  },
  fetchTagQuotes: function() {
    Api.tags.tagQuotes(this.props.route.tagName, {
      success: (response) => {
        if (response.body.error) {
          console.warn(response.body);
        } else if (response.body.quotes) {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
          this.setState({
            quotes: ds.cloneWithRows(response.body.quotes),
            quotesLoaded: true
          });
        }
      }
    });
  },
  render: function() {
    if (!this.state.quotesLoaded) {
      return <LoadScreen />;
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <QuoteList
              tagName={this.props.route.tagName}
              quotes={this.state.quotes}
              navigator={this.props.navigator} />
          </View>
        </ScrollView>
      );
    }
  }
});

const styles = StyleSheet.create({

});