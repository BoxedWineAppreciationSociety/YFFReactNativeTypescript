import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ArtistScreen from '../screens/ArtistScreen';
import ProgramScreen from '../screens/ProgramScreen';

const stackNavigator = createStackNavigator();

const ProgramNavigator = () => {
  return (
    <stackNavigator.Navigator headerMode="none">
      <stackNavigator.Screen name="PROGRAM" component={ProgramScreen} />
      <stackNavigator.Screen name="ARTIST" component={ArtistScreen} />
    </stackNavigator.Navigator>
  );
};

export default ProgramNavigator;

// createStackNavigator(
//   {
//     PROGRAM: {
//       screen: ProgramScreen,
//     },
//     ARTIST: {
//       screen: ArtistScreen,
//     },
//   },
//   {
//     headerMode: 'none',
//   },
// ));
