import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from '../styles';
import Hamburger from './Hamburger';

export default class Mapscreen extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  }
  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <View style={styles.mapContainer}>
        <Hamburger onPress={() => {
          openDrawer();
        }}/>
        <MapView style={styles.map}>
        </MapView>
      </View>
    )
  }
}