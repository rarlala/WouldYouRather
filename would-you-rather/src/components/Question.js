import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Link } from 'react-router-dom';

class Question extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>No Question</p>;
    }

    const { name, id, avatarURL, text1, text2, hasAnswered } = question;

    return (
      <div className="question">
        <p className="author">{name} asks:</p>
        <div className="question-box">
          <div className="question-box-left">
            <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
          </div>
          <div className="question-box-right">
            <p className="title">Would you rather</p>
            <p className="question-text">
              {text1} <strong>OR</strong> {text2}
            </p>

            {/* 로그인 여부에 따른 로그인화면으로 이동과 답변 여부에 따른 버튼 조건처리 */}

            {this.props.authedUser === 'null' ? (
              <Link to="/login"></Link>
            ) : hasAnswered ? (
              <Link to={`/question/${id}`}>
                <button type="submit" className="view-poll">
                  Answer
                </button>
              </Link>
            ) : (
              <Link to={`/question/${id}`}>
                <button type="submit" className="view-poll">
                  View Poll
                </button>
              </Link>
            )}
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
    question: formatQuestion(question, users[question.author], authedUser),
  };
}

export default connect(mapStateToProps)(Question);
