import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CenterBtn = (props) => {
  const additionalStyle = props.style || {};
  return (
    <TouchableOpacity style={[styles.centerBtn, additionalStyle]} onPress={() => {
      if (props.onPress){
        props.onPress();
      }
    }}>
      <Text style={styles.centerBtnText}>
        CENTER
      </Text>
    </TouchableOpacity>
  )
}

export default CenterBtn;