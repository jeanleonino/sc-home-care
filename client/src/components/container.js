import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Container extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="sidebar"></div>
        <div className="content"></div>
      </div>
    );
  }
}
