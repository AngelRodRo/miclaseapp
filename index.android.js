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
import MapScreen from './src/components/map/Map';
import ProfileScreen from './src/components/profile/Profile';


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
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Map: { screen: MapScreen }
  },
  { 
    headerMode: 'none' 
  }
);


AppRegistry.registerComponent('MiClaseApp', () => SimpleApp);
