import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { Tab } from 'semantic-ui-react';

class Dashboard extends Component {
  render() {
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
            {this.props.unAnsweredList.length === 0 ? (
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

// hasAnswered:
//       optionOne['votes'].includes(authedUser) ||
//       optionTwo['votes'].includes(authedUser),

export default connect(mapStateToProps)(Dashboard);
