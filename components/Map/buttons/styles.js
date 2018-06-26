
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  hamburger: {
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

  centerBtnImage: {
    width: 30,
    height: 40,
    resizeMode: 'stretch'
  },

  redoSearchBtnContainer: {
    width: 125,
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingLeft: 20,
    borderRadius: 4,
    borderWidth: 0.5
  },
  redoSearchBtnText: {
    fontSize: 15,
  },

})

export default styles;