import React from 'react';
import {DrawerItems} from 'react-navigation';
import {Text, View} from 'react-native';

import styles from './styles'

const SideMenu = (props) => 
<View style={styles.sideMenu}>
  <View style={{height: 100}}>
    <Text>
      Profile Placeholder
    </Text>
  </View>
  <DrawerItems {...props} />
</View>

export default SideMenu;