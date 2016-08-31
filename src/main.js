import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import SignIn from './components/authentication/signin';

const ROUTES = {
  signin: SignIn
}

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
})

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});