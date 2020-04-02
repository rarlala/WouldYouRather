import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import ProtectedRoute from './ProtectedRoute';

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
            {console.log('authedUser:', this.props.authedUser)}
            {console.log('authedUser null:', this.props.authedUser === 'null')}
            {this.props.loading === true ? null : (
              <Switch>
                <ProtectedRoute path="/" exact component={Dashboard} />
                <ProtectedRoute path="/new" component={NewQuestion} />
                <ProtectedRoute
                  path="/question/:id"
                  component={QuestionDetail}
                />
                <ProtectedRoute path="/leaderBoard" component={LeaderBoard} />
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
    loading: authedUser === null,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
