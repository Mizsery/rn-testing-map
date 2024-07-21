import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

import MapElement from './MapElement';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName='Город'
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16
        }
      }}
    >
      <Drawer.Screen name='Профиль' component={Profile} />
      <Drawer.Screen name='Город' component={MapElement} />
      <Drawer.Screen name='Настройки' component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
