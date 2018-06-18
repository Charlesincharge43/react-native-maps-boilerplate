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