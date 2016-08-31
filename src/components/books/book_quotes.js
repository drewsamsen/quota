'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  ScrollView,
  AsyncStorage
} from 'react-native';
import Api from '../common/api';
import Button from '../common/button';
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
    setTimeout(() => { this.fetchBookQuotes(); }, 500);
  },
  fetchBookQuotes: function() {
    Api.books.bookQuotes(this.props.route.bookId, {
      success: (response) => {
        if (response.body.error) {
          this.setState({errorMessage: response.body.error});
        } else if (response.body.quotes) {
          response.body.quotes.map(this.cacheBookQuote);
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
          this.setState({
            quotes: ds.cloneWithRows(response.body.quotes),
            quotesLoaded: true
          });
        }
      }
    });
  },
  cacheBookQuote: function(quote) {
    AsyncStorage.setItem(
      `@quota:book:${this.props.route.bookId}:quote:${quote.id}`,
      JSON.stringify(quote)
    );
  },
  render: function() {
    if (!this.state.quotesLoaded) {
      return <LoadScreen />;
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <Button text={'Back'} onPress={this.props.navigator.pop} />
            <QuoteList
              bookId={this.props.route.bookId}
              quotes={this.state.quotes}
              navigator={this.props.navigator} />
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
    paddingTop: 30
  },
});