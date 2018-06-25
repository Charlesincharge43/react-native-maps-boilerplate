import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import btnFactory from '../../shared/hoc/btnFactory';

const HamburgerView = () =>
  <View style={styles.hamburger}>
    <View style={styles.hamburgerLine} />
    <View style={styles.hamburgerLine}/>
    <View style={styles.hamburgerLine}/>
  </View>

const Hamburger = btnFactory(HamburgerView);

export default Hamburger;