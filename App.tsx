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
import Mixpanel from 'react-native-mixpanel';
import AppDrawerNavigator from './navigators/AppDrawerNavigator';

declare var global: { HermesInternal: null | {} };

const App = () => {
  Mixpanel.sharedInstanceWithToken(
    'fae80bc076f11cf15deb0be67d83c74b',
    false,
  ).then(() => {
    Mixpanel.track('Android app launched');
  });

  return (
    <>
      <NavigationContainer>
        <AppDrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
