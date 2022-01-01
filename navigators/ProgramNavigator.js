import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ArtistDetailsScreen } from '../screens/ArtistDetailsScreen'
import {ProgramScreen} from '../screens/ProgramScreen/ProgramScreen';

const stackNavigator = createStackNavigator();

const ProgramNavigator = () => {
  return (
    <stackNavigator.Navigator headerMode="none">
      <stackNavigator.Screen name="PROGRAM" component={ProgramScreen} />
      <stackNavigator.Screen name="ARTIST" component={ArtistDetailsScreen} />
    </stackNavigator.Navigator>
  );
};

export default ProgramNavigator;
