import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from '../styles';

const Hamburger = (props) => {
  return (
    <TouchableOpacity style={styles.hamburger} onPress={() => {
      if (props.onPress){
        props.onPress();
      }
    }}>
      <View style={styles.hamburgerLine} />
      <View style={styles.hamburgerLine}/>
      <View style={styles.hamburgerLine}/>
    </TouchableOpacity>
  )
}

export default Hamburger;