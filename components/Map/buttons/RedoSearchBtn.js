import React from 'react';
import { Text } from 'react-native';

import styles from './styles';
import btnFactory from '../../shared/hoc/btnFactory';

const RedoSearchBtnView = () =>
  <Text style={styles.redoSearchBtnText}>
    REDO SEARCH
  </Text>

const RedoSearchBtn = btnFactory(RedoSearchBtnView);

export default RedoSearchBtn;