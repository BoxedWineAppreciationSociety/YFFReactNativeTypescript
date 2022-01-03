import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ArtistDetailsScreen } from '../screens/ArtistDetailsScreen'
import { ArtistsListScreen } from '../screens/ArtistsListScreen';

const StackNavigator = createStackNavigator();

const ArtistNavigator = () => {
  return (
    <StackNavigator.Navigator headerMode="none">
      <StackNavigator.Screen name="ARTISTS" component={ArtistsListScreen} />
      <StackNavigator.Screen name="ARTIST" component={ArtistDetailsScreen} />
    </StackNavigator.Navigator>
  );
};

export default ArtistNavigator;
