
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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


  centerBtnText: {
    color: 'blue',
    fontWeight: 'bold',
  },

  redoSearchBtnText: {
    color: 'blue',
    fontWeight: 'bold',
  },

})

export default styles;