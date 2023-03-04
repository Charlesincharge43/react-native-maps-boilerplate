import React from 'react';
import {
  TextInput,
  Text,
  View } from 'react-native';

import styles from './styles'

type IProps = {
  handleChangeUsername: (input: string) => void;
  handleChangePassword: (input: string) => void;
  handleSubmit: () => void;
  errorMessage: string;
}

const SideMenu = (props: IProps) => 
<View style={styles.container}>
  <Text>USERNAME</Text>
  <TextInput style={styles.textInput} onChangeText={props.handleChangeUsername}/>
  <Text>PASSWORD</Text>
  <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={props.handleChangePassword}/>
  <Text onPress={props.handleSubmit}>SIGN IN</Text>
  <Text style={styles.colorRed}>{props.errorMessage}</Text>
</View>

export default SideMenu;