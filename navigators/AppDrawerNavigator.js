import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GLOBAL from '../constants/constants';
import MadeWithLoveScreen from '../screens/MadeWithLoveScreen';
import MoreScreen from '../screens/MoreScreen';
import ArtistNavigator from './ArtistNavigator';
import ProgramNavigator from './ProgramNavigator';

const drawerNavigator = createDrawerNavigator();

const MainNavigationComponent = ({progress, ...rest}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerImage}>
      <Image
        source={require('../assets/DrawerBanner.png')}
        style={styles.headerImageImage}
      />
    </View>
    <DrawerContentScrollView {...rest} style={styles.drawerMenu}>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = () => {
  return (
    <drawerNavigator.Navigator
      drawerContent={props => MainNavigationComponent(props)}
      drawerContentOptions={{
        labelStyle: {
          fontFamily: 'BebasNeueRegular',
          fontSize: 26,
          fontWeight: 'normal',
        },
        activeTintColor: GLOBAL.COLOR.YFFBROWN,
      }}>
      <drawerNavigator.Screen
        name="PROGRAM"
        component={ProgramNavigator}
        options={{
          drawerLabel: 'PROGRAM',
          drawerIcon: ({}) => (
            <Image
              source={require('../assets/icons/ic-drawer-note.png')}
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
            />
          ),
        }}
      />
      <drawerNavigator.Screen
        name="ARTISTS"
        component={ArtistNavigator}
        options={{
          drawerLabel: 'ARTISTS',
          drawerIcon: ({}) => (
            <Image
              source={require('../assets/icons/ic-drawer-guitar.png')}
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
            />
          ),
        }}
      />
      <drawerNavigator.Screen
        name="MORE"
        component={MoreScreen}
        options={{
          drawerLabel: 'MORE',
          drawerIcon: ({}) => (
            <Image
              source={require('../assets/icons/ic-drawer-more.png')}
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
            />
          ),
        }}
      />
      <drawerNavigator.Screen
        name="MADE WITH LOVE"
        component={MadeWithLoveScreen}
        options={{
          drawerLabel: 'MADE WITH LOVE',
          drawerIcon: ({}) => (
            <Image
              source={require('../assets/icons/ic-made-with-love.png')}
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
            />
          ),
        }}
      />
    </drawerNavigator.Navigator>
  );
};

export default AppDrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  headerImage: {
    height: 250,
    overflow: 'visible',
  },
  headerImageImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  drawerMenu: {
    flex: 1,
  },
});
