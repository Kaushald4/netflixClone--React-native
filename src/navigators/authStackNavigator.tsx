import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnBoardingScreen} from '../screens';
import appStackNavigator from './appStackNavigator';

const AuthStack = createStackNavigator();

const authStackNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <AuthStack.Screen name="AppStack" component={appStackNavigator} />
    </AuthStack.Navigator>
  );
};

export default authStackNavigator;
