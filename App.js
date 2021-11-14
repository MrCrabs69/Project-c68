import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default function App() {
  return (
<AppContainer/>
  );
}
const TabNavigator=createBottomTabNavigator({
  Instagram:{screen:Instagram},
  Facebook:{screen:Facebook}
})
const AppContainer = createAppContainer(TabNavigator)