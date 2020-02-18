import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ArtistScreen from '../screens/ArtistScreen';
import ArtistsScreen from '../screens/ArtistsScreen';

const stackNavigator = createStackNavigator();

const ArtistNavigator = () => {
  return (
    <stackNavigator.Navigator headerMode="none">
      <stackNavigator.Screen name="ARTISTS" component={ArtistsScreen} />
      <stackNavigator.Screen name="ARTIST" component={ArtistScreen} />
    </stackNavigator.Navigator>
  );
};

export default ArtistNavigator;
