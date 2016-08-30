'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import Button from '../common/button';
import Api from '../common/api';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  onPress: function() {
    Api.auth.logIn(this.state.username, this.state.password, {
      success: (response) => {
        // Will clear errorMessage if error key does not exist on body
        this.setState({errorMessage: response.body.error});
      }
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign In</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          autoCapitalize='none'
          onChangeText={(text) => this.setState({username: text}) }
          value={this.state.username}
          style={styles.input}
          />

        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={(text) => this.setState({password: text}) }
          value={this.state.password}
          secureTextEntry={true}
          style={styles.input}
          />

        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress} />
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
  text: {
    fontSize: 13
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});