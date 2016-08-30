import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignIn from './components/authentication/signin';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <SignIn />
      </View>
    );
  }
})

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});