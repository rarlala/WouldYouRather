import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import QuestionDetail from './QuestionDetail';

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <ul>
          {this.props.questionsIds.map(id => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
