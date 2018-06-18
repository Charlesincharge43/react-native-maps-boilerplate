
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
  centerBtn: {
    right: 25,
    zIndex: 1,
  },
  hamburger: {
    flex: 0,
    zIndex: 1,
    height: 15,
    width: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    width: 25,
    height: 3,
    backgroundColor: 'black',
  },
  topLeft: {
    top: 35,
    left: 15,
  },
  bottomRight: {
    top: 500,
    left: 330,
  },
  centerBtnText: {
    color: 'blue',
    fontWeight: 'bold',
  }
})

export default styles;