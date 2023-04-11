import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameListScreen from '../screens/game-list-screen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Games" component={GameListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
