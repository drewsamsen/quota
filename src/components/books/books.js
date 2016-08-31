'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  AsyncStorage
} from 'react-native';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      user: null
    };
  },
  componentWillMount: function() {
    AsyncStorage.getItem('@quota:user:email')
    .then((value) => {
      this.setState({user: value});
    });
  },
  render: function() {

    return (
      <View style={styles.container}>
        <Text>Welcome back, {this.state.user}!</Text>
        <Text>Soon you can see all your books here.</Text>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});