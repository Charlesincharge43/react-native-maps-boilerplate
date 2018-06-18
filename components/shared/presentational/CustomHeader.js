import React from 'react';

import styles from '../styles'
import {Text, View, TouchableOpacity} from 'react-native';

const CustomHeader = (props) => {
  return (
    <View style={styles.customHeader}>
      <TouchableOpacity style={styles.customHeaderBackBtn} onPress={() => {
        if (props.onPress){
          props.onPress();
        }
      }}>
        <View>
          <Text style={{ fontSize: 32, color: 'blue' }}>{'<'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CustomHeader;