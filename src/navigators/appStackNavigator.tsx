import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  MoviesScreen,
  MyListScreen,
  TvShowsScreen,
} from '../screens';

const AppStack = createStackNavigator();

const appStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen name="TvShowsScreen" component={TvShowsScreen} />
      <AppStack.Screen name="MoviesScreen" component={MoviesScreen} />
      <AppStack.Screen name="MyListScreen" component={MyListScreen} />
    </AppStack.Navigator>
  );
};

export default appStackNavigator;
