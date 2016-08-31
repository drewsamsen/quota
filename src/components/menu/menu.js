'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({
  onByBooksPress: function() {
    this.props.navigator.push({name: 'books'})
  },
  onByTagsPress: function() {
    this.props.navigator.push({name: 'tags'})
  },
  onBySignInPress: function() {
    this.props.navigator.push({name: 'signin'})
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Button text={'Quotes by Book'} onPress={this.onByBooksPress} />
        <Button text={'Quotes by Tag'} onPress={this.onByTagsPress} />
        <Button text={'Sign In'} onPress={this.onBySignInPress} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});