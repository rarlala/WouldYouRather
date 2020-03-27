import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';

class Question extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>No Question</p>;
    }

    console.log('hey', this.props);

    const {
      name,
      id,
      avatarURL,
      optionOne,
      optionTwo,
      text1,
      text2,
      hasAnswered
    } = question;

    return (
      <div>
        <div className="question">
          <p className="author">{name} asks:</p>
          <div className="question-box">
            <div className="question-box-left">
              <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className="avatar"
              />
            </div>
            <div className="question-box-right">
              <p className="title">Would you rather</p>
              <p className="question-text">
                {text1} <strong>OR</strong> {text2}
              </p>
              <button type="submit" className="view-poll">View Poll</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser)
  };
}

export default connect(mapStateToProps)(Question);
