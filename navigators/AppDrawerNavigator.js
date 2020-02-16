import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Image } from 'react-native';
import GLOBAL from '../constants/constants';
import ProgramNavigator from './ProgramNavigator';

const drawerNavigator = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <drawerNavigator.Navigator>
      <drawerNavigator.Screen
        name="PROGRAM"
        component={ProgramNavigator}
        options={{
          drawerLabel: 'PROGRAM',
          drawerIcon: ({}) => (
            <Image
              source={require('../assets/icons/ic-drawer-note.png')}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: GLOBAL.COLOR.YFFBROWN,
              }}
            />
          ),
        }}
      />
    </drawerNavigator.Navigator>
  );
};

export default AppDrawerNavigator;
