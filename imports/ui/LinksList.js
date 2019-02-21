import React, { Component } from 'react'
import { Links } from './../api/links';


class LinksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }
  componentDidMount() {
      this.linksTracker = Tracker.autorun(() => {
        const links = Links.find().fetch();
        this.setState({links});
    });
  }
  componentWillUnmount() {
    this.linksTracker.stop();
  }
  renderLinksListItems() {
    return this.state.links.map((link) => {
      return <p key={link._id}>{link.url}</p>
    });
  }
  render() {
    return (
      <div>
            <p>Links List</p>
            <div>
              {this.renderLinksListItems()}
            </div>
      </div>
    )
  }
}
export default LinksList;