import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MapPage from './Map';

import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';

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
      <Drawer.Screen name='Город' component={MapPage} />
      <Drawer.Screen name='Настройки' component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
