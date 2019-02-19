import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>Login to Short Lnk</h1>
        <p>login from here</p>
        <Link to="/signup">Have an account?</Link>
      </div>
    )
  }
}
export default Login;