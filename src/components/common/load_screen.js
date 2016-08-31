'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          style={styles.spinner}
          size="large"
        />
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
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
});

