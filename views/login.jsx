import React, { Component } from 'react';
import { TextInput, Button } from 'carbon-components-react';

export default class Login extends Component {

  constructor(props) {
    console.log('LoginView constructor called');

    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.login = this.login.bind(this);
  }

  onChangeUsername(e) {
    console.log(`onChangeUsername called with ${e.target.value}`);
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    console.log(`onChangePassword called with ${e.target.value}`);
    this.setState({
      password: e.target.value,
    });
  }

  login() {
    console.log(`LoginView login with username ${this.state.username} and password ${this.state.password}`);
    // this.setState({
    //   loading: true,
    // });
    fetch('/auth/bluegroups', {
      method: 'post',
      body: {
        username: this.state.username,
        password: this.state.password,
      },
    }).catch(() => {
      console.log('error in fetching data');
    });
  }

  render() {
    return (
      <div className="">
        <TextInput
          className="bx--text-input"
          id="username"
          labelText="Email"
          // onClick={onClick()}
          onChange={e => this.onChangeUsername(e)}
          placeholder="Please enter an email"
          type="email"
        />
        <TextInput
          className="bx--text-input"
          id="password"
          labelText="Password"
          // onClick={onClick()}
          onChange={e => this.onChangePassword(e)}
          placeholder="Please enter a password"
          type="password"
        />
        <Button
          className="bx--btn bx--btn--primary"
          onClick={() => this.login()}
        >Login</Button>
      </div>
    );
  }
}

Login.propTypes = {};
