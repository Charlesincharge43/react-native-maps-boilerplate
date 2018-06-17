import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
  },
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
  hamburger: {
    top: 35,
    left: 15,
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
  sideMenu: {
    top: 35,
    flexDirection: 'column',
  },
  customHeader: {
    height: 60,
    paddingTop: 15,
    backgroundColor: 'white',
  },
  customHeaderBackBtn: {
    margin: 5,
  },

  colorRed: { color: 'red'},
  colorGreen: { color: 'green'},
  
});

export default styles;