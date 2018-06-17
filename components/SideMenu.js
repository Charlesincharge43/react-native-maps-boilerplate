import React, {Component} from 'react';
import {DrawerItems} from 'react-navigation';
import {Text, View} from 'react-native';

import styles from '../styles'

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.sideMenu}>
        <View style={{height: 100}}>
          <Text>
            Profile Placeholder
          </Text>
        </View>
      <DrawerItems {...this.props} />
    </View>
    );
  }
}

export default SideMenu;