import { createStackNavigator } from '@react-navigation/stack';
import ArtistScreen from '../screens/ArtistScreen';
import ArtistsScreen from '../screens/ArtistsScreen';

export default (ArtistNavigator = createStackNavigator(
  {
    ARTISTS: {
      screen: ArtistsScreen,
    },
    ARTIST: {
      screen: ArtistScreen,
    },
  },
  {
    headerMode: 'none',
  },
));
