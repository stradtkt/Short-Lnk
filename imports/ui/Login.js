import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Meteor.loginWithPassword({email}, password, (err) => {
            console.log("Signup Callback ", err);
        });
        // this.setState({
        //     error: 'Something went wrong'
        // });
    }
  render() {
    return (
      <div className="Login">
        <h1>Login to Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button>Submit</button>
        </form>
        <Link to="/signup">Have an account?</Link>
      </div>
    )
  }
}
export default Login;