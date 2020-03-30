import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialDate } from '../actions/shared';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialDate());
  }

  render() {
    return (
      <div className="container">
        {/* {this.props.loading === true ? null : <Dashboard />} */}
        {this.props.loading === true ? null : (
          <LeaderBoard />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
