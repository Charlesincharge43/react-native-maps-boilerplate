import React, {Component} from 'react';
import {
  TextInput,
  Text,
  View } from 'react-native';

import styles from '../styles'

const SideMenu = (props) => 
<View style={styles.container}>
  <Text>USERNAME</Text>
  <TextInput style={styles.textInput} onChangeText={props.handleChangeUsername}/>
  <Text>PASSWORD</Text>
  <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={props.handleChangePassword}/>
  <Text onPress={props.handleSubmit}>SIGN IN</Text>
  <Text style={styles.colorRed}>{props.errorMessage}</Text>
</View>

export default SideMenu;