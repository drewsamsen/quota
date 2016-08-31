'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Coming soon...</Text>
        <Button text={'Back'} onPress={this.props.navigator.pop} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});