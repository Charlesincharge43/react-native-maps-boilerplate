import React from 'react';
import { Text, View, Dimensions } from 'react-native';

import styles from './styles';
import btnFactory from '../../shared/hoc/btnFactory';
import withAnimationVerticalSlide from '../../shared/hoc/withAnimationVerticalSlide';
import withAnimationFade from '../../shared/hoc/withAnimationFade';

const deviceHeight = Dimensions.get('window').height;

const RedoSearchBtnView = () =>
  <View style={styles.redoSearchBtnContainer}>
    <Text style={styles.redoSearchBtnText}>
      Redo Search
    </Text>
  </View>

const RedoSearchBtnUnanimated = btnFactory(RedoSearchBtnView);
const RedoSearchBtnFadeAnimated = withAnimationFade(200)(RedoSearchBtnUnanimated);
const RedoSearchBtnFadeVerticalAnimated = withAnimationVerticalSlide(deviceHeight, deviceHeight - 115, 350)(RedoSearchBtnFadeAnimated);


const RedoSearchBtnComposed = (props) => <RedoSearchBtnFadeVerticalAnimated isAtPositionOne={props.isHidden} {...props} />

export default RedoSearchBtnComposed;