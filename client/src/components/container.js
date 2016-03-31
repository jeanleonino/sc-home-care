import React, { Component, PropTypes } from 'react';

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <h1>sc - home care</h1>
        </div>
        <div className="content"></div>
      </div>
    );
  }
}
