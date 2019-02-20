import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

class Link extends Component {
    onLogout() {
        Accounts.logout();
    }
  render() {
    return (
      <div className="Link">
        <h1>Your Links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default Link;
