/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppDrawerNavigator from './navigators/AppDrawerNavigator';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppDrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

// {
//   PROGRAM: {
//     screen: ProgramNavigator,
//     navigationOptions: {
//       drawerLabel: 'PROGRAM',
//       drawerIcon: ({tintColor}) => (
//         <Image
//           source={require('../assets/icons/ic-drawer-note.png')}
//           resizeMode="contain"
//           style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
//         />
//       ),
//     },
//   },
//   EVENTMAP: {
//     screen: MapScreen,
//     navigationOptions: {
//       drawerLabel: 'EVENT MAP',
//       drawerIcon: ({tintColor}) => (
//         <Image
//           source={require('../assets/icons/ic-drawer-map.png')}
//           resizeMode="contain"
//           style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
//         />
//       ),
//     },
//   },
//   ARTISTS: {
//     screen: ArtistNavigator,
//     navigationOptions: {
//       drawerLabel: 'ARTISTS',
//       drawerIcon: ({tintColor}) => (
//         <Image
//           source={require('../assets/icons/ic-drawer-guitar.png')}
//           resizeMode="contain"
//           style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
//         />
//       ),
//     },
//   },
//   MORE: {
//     screen: MoreScreen,
//     navigationOptions: {
//       drawerLabel: 'MORE',
//       drawerIcon: ({tintColor}) => (
//         <Image
//           source={require('../assets/icons/ic-drawer-more.png')}
//           resizeMode="contain"
//           style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
//         />
//       ),
//     },
//   },
//   MADEWITHLOVE: {
//     screen: MadeWithLoveScreen,
//     navigationOptions: {
//       drawerLabel: 'MADE WITH LOVE',
//       drawerIcon: ({tintColor}) => (
//         <Image
//           source={require('../assets/icons/ic-made-with-love.png')}
//           resizeMode="contain"
//           style={{width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN}}
//         />
//       ),
//     },
//   },
// },
// {
//   contentComponent: MainNavigationComponent,
//   defaultNavigationOptions: {
//     color: GLOBAL.COLOR.YFFBROWN,
//     textAlign: 'left',
//   },
//   contentOptions: {
//     labelStyle: {
//       fontFamily: 'BebasNeueRegular',
//       fontSize: 26,
//       fontWeight: 'normal',
//     },
//     activeTintColor: GLOBAL.COLOR.YFFBROWN,
//   },
// },
