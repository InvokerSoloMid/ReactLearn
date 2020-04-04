import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import ScrollViewExample from './src/pages/scrollview.js';
import Login from './src/pages/login.js';

const screen = Dimensions.get('window');

const TabNavigator = createBottomTabNavigator(
  {
    scrollExample: {
      screen: ScrollViewExample,
      navigationOptions: () => ({
        tabBarIcon: () => {
          return <Image source={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gray_compass_rose.svg/1200px-Gray_compass_rose.svg.png'} style={styles.icon} />;
        },
      }),
    },
    login: {
      screen: Login,
      navigationOptions: () => ({
        tabBarIcon: () => {
          return <Image source={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gray_compass_rose.svg/1200px-Gray_compass_rose.svg.png'} style={styles.icon} />;
        },
      }),
    },
  }
);

export default createStackNavigator({
  login: {
    screen: TabNavigator,
    navigationOptions: () => ({
      tabBarIcon: () => {
        return <Image source={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gray_compass_rose.svg/1200px-Gray_compass_rose.svg.png'} style={styles.icon} />;
      },
    }),
  },
  scrollExample: {
    screen: ScrollViewExample,
    navigationOptions: () => ({
      tabBarIcon: () => {
        return <Image source={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gray_compass_rose.svg/1200px-Gray_compass_rose.svg.png'} style={styles.icon} />;
      },
    }),
  },
});