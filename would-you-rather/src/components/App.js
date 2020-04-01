import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAuthedUser, handleInitialDate } from '../actions/shared';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';
import QuestionDetail from './QuestionDetail';
import { LoadingBar } from 'react-redux-loading';
import Login from './Login';
import Logout from './Logout';
import PageNotFound from './PageNotFound';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleAuthedUser());
    this.props.dispatch(handleInitialDate());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <Switch>
<Route path="/" exact component={Dashboard} />
                <Route path="/new" component={NewQuestion} />
                <Route path="/question/:id" component={QuestionDetail} />
                <Route path="/leaderBoard" component={LeaderBoard} />                
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
