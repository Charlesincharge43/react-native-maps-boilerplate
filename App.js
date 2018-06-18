import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import {Text, View, Icon} from 'react-native';

/* this is just temporary way to initialize the mock api script
There should be a better way to do it */
import mockAPI from './mockAPI';

import store from './store';
import Login from './components/Login';
import MapWithGeolocation from './components/map/MapWithGeolocation';
import SideMenu from './components/SideMenu';
import Help from './components/Help';
import Settings from './components/Settings';
import CustomHeader from './components/CustomHeader';

/* Note: entry point for react native must be a class that extends
React.Component.  Cannot be a dumb component

navigation stacks also cannot be placed in a view, or they will not render
*/

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainStack />
      </Provider>
    )
  }
}

const drawerScreenNavigationOptions = ({ navigation }) => {
  /* Screens with this navigation option will be rendered with a header
  and back button that goes directly back to the `Map` screen */
  const goBackToMapScreen = () => navigation.navigate('Map');
  return {
    header: <CustomHeader onPress={() => {
      goBackToMapScreen();
    }}/>
  }
}

const hideFromDrawer = () => {
  return { drawerLabel: () => null };
}

const DrawerStack = createDrawerNavigator(
  {
    Map: { screen: MapWithGeolocation, navigationOptions: hideFromDrawer },
    Help: createStackNavigator({
      HelpMain: { screen: Help, navigationOptions: drawerScreenNavigationOptions }
    }),
    Settings: createStackNavigator({
      SettingsMain: { screen: Settings, navigationOptions: drawerScreenNavigationOptions }
    }),
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 250,
  }
);

const MainStack = createStackNavigator({
  Login: { screen: Login },
  Main: {
    screen: DrawerStack,
    navigationOptions: () => ({header: null})
  },
});