import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MapContainer } from './Map/MapContainer';
import { Help } from './Help/Help';
import { Settings } from './Settings/Settings';
import { SideMenu } from './SideMenu/SideMenu';

type DrawerScreenParamList = {
  Map: {};
  Help: {};
  Settings: {};
}

const Drawer = createDrawerNavigator<DrawerScreenParamList>();

export const Main = () => {
  return (
    <Drawer.Navigator initialRouteName="Map" drawerContent={SideMenu}>
      <Drawer.Screen name="Map" component={MapContainer} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
