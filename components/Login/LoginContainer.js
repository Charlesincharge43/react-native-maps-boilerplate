import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { signin } from '../../redux/auth';


class StatefulLogin extends Component {
  constructor(props){
    super(props)
    this.state = { username: '', password: '', errorMessage: ''};
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(username){
    // console.log('username : ' + username);
    this.setState({username});
  }

  handleChangePassword(password){
    // console.log('password : ' + password);
    this.setState({password});
  }

  handleSubmit(){
    // console.log('logging in with following credentials: ');
    // console.log(this.state);

    const { navigate } = this.props.navigation;
    const credentials = {username: this.state.username, password: this.state.password};
    this.props.signin(credentials)
      .then(() => navigate('Main'))
      .catch(err => {
        console.error('error from server: ' + err);
        if (err.response && err.response.status === 401) {
          this.setState({errorMessage: 'The email address or password you entered is incorrect.'});
        } else {
          this.setState({errorMessage: 'The system could not process your request.  Please try again'});
        }
      })
  }

  render() {
    return (
      <Login
      handleChangeUsername={this.handleChangeUsername}
      handleChangePassword={this.handleChangePassword}
      handleSubmit={this.handleSubmit}
      errorMessage={this.state.errorMessage}
      />
    );
  }
}

const mapDispatchToProps = { signin };

const ConnectedStatefulLogin = connect(null, mapDispatchToProps)(StatefulLogin);
export default ConnectedStatefulLogin;