import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Login from './Login';

const StatefulLogin = () => {
  const { navigate } = useNavigation();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const submitLoginAndNavigate = async (username: string, password: string) => {
    console.log('submitting')
    await new Promise<void>(resolve => setTimeout(() => resolve(), 1000))
    // ^ replace with login logic
    navigate('Main', {});
  }

  return (
    <Login
      handleChangeUsername={(input) => setUsername(input)}
      handleChangePassword={(input) => setPassword(input)}
      handleSubmit={() => submitLoginAndNavigate(userName, password)}
      errorMessage={errorMessage}
    />
  )
}

export default StatefulLogin;
