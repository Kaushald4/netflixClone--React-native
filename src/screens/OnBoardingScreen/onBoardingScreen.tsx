import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

const onBoardingScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Text>Onboarding Screen</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={400}
        snapToAlignment="center">
        <View style={{width: '100%', backgroundColor: 'yellow'}}>
          <Text>Screen one</Text>
        </View>
        <View style={{width: '100%', height: '100%'}}>
          <Text>Screen two</Text>
        </View>
        <View style={{width: '100%', height: '100%'}}>
          <Text>Screen three</Text>
        </View>
        <View style={{width: '100%', height: '100%'}}>
          <Text>Screen four</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default onBoardingScreen;

const styles = StyleSheet.create({});
