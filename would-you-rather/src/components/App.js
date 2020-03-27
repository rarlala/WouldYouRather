import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialDate } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialDate());
  }

  render() {
    return <div>Start Code</div>;
  }
}

export default connect()(App);
