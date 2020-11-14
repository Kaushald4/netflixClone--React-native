import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import AuthStackNavigator from './navigators/authStackNavigator';

export default function App({theme}: any) {
  return (
    <NavigationContainer theme={theme}>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}
