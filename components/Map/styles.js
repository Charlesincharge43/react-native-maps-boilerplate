
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  center: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
  topLeft: {
    position: 'absolute',
    top: 60,
    left: 30,
    zIndex: 1,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 200,
    right: 25,
  },
  bottomCenter: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
})

export default styles;