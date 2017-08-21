/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import HomeScreen from './src/components/home/Home';
import LoginScreen from './src/components/login/Login';
import RegisterScreen from './src/components/register/Register';

import {
  StackNavigator
} from 'react-navigation';

export default class MiClaseAppV1 extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

const SimpleApp = StackNavigator(
  {
    Register: { screen: RegisterScreen }
  },
  { 
    headerMode: 'none' 
  }
);


AppRegistry.registerComponent('MiClaseApp', () => SimpleApp);
