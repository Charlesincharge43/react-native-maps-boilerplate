import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import btnFactory from '../../shared/hoc/btnFactory';

const RedoSearchBtnView = () =>
  <View style={styles.redoSearchBtnContainer}>
    <Text style={styles.redoSearchBtnText}>
      Redo Search
    </Text>
  </View>

const RedoSearchBtn = btnFactory(RedoSearchBtnView);

export default RedoSearchBtn;