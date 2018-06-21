import React from 'react';
import { Text } from 'react-native';

import styles from './styles';
import btnFactory from '../shared/hoc/btnFactory';

const CenterBtnView = () =>
  <Text style={styles.centerBtnText}>
    CENTER
  </Text>

const CenterBtn = btnFactory(CenterBtnView);

export default CenterBtn;