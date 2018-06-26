import React from 'react';
import { Image } from 'react-native';

import styles from './styles';
import btnFactory from '../../shared/hoc/btnFactory';

const CenterBtnView = () =>
  <Image source={require('./img/my_location_icon.png')} style={{
    width: 50,
    height: 50
  }} />

const CenterBtn = btnFactory(CenterBtnView);

export default CenterBtn;