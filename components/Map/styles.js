
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  mapContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topLeft: {
    top: 35,
    left: 15,
    zIndex: 1,
  },
  bottomRight: {
    top: 500,
    left: 330,
  },
  bottomCenter: {
    top: 650,
    left: 165,
  },
})

export default styles;