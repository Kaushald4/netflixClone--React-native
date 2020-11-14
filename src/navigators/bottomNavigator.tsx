import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import appStackNavigator from './appStackNavigator';
import {
  CommingSoonScreen,
  DownloadsScreen,
  MoreScreen,
  SearchScreen,
} from '../screens';

const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeStack" component={appStackNavigator} />
      <BottomTab.Screen name="SearchScreen" component={SearchScreen} />
      <BottomTab.Screen
        name="CommingSoonScreen"
        component={CommingSoonScreen}
      />
      <BottomTab.Screen name="DownloadsScreen" component={DownloadsScreen} />
      <BottomTab.Screen name="MoreScreen" component={MoreScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
