import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

import styles from './styles';
import withAnimationVerticalSlide from '../../shared/hoc/withAnimationVerticalSlide';

const deviceHeight = Dimensions.get('window').height;

const POIDetailsView = (props) =>
<View style={styles.container}>
  <Text>
    POI Details Placeholder
  </Text>
</View>

const POIDetailsAnimated = withAnimationVerticalSlide(deviceHeight, deviceHeight - StyleSheet.flatten(styles.container).height, 350)(POIDetailsView);

const POIDetailsComposed = (props) => <POIDetailsAnimated isAtPositionOne={props.isHidden} {...props} />

export default POIDetailsComposed;