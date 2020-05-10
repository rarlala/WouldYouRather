import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { Tab } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    console.log('Dashboard authedUser', this.props.authedUser);

    if (this.props.authedUser === null) {
      return <Redirect to="/login" />;
    }

    const panes = [
      {
        menuItem: 'Unanswered Questions',
        render: () => (
          <Tab.Pane attached={false}>
            {this.props.unAnsweredList.length === 0 ? (
              <li key="1">No Unanswered Questions :)</li>
            ) : (
              this.props.unAnsweredList.map(id => (
                <li key={id}>
                  <Question id={id} />
                </li>
              ))
            )}
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Answered Questions',
        render: () => (
          <Tab.Pane attached={false}>
            {this.props.answeredList.length === 0 ? (
              <li key="1">No Answered Questions :)</li>
            ) : (
              this.props.answeredList.map(id => (
                <li key={id}>
                  <Question id={id} />
                </li>
              ))
            )}
          </Tab.Pane>
        )
      }
    ];

    return (
      <div className="content">
        <Tab menu={{ attached: false, tabular: false }} panes={panes}></Tab>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    answeredList: Object.keys(questions)
      .filter(
        id =>
          (questions[id].optionOne['votes'].includes(authedUser) ||
            questions[id].optionTwo['votes'].includes(authedUser)) === true
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unAnsweredList: Object.keys(questions)
      .filter(
        id =>
          (questions[id].optionOne['votes'].includes(authedUser) ||
            questions[id].optionTwo['votes'].includes(authedUser)) === false
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
}

export default connect(mapStateToProps)(Dashboard);
