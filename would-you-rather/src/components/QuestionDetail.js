import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';

class QuestionDetail extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>No Question</p>;
    }

    const {
      name,
      id,
      avatarURL,
      optionOne,
      optionTwo,
      text1,
      text2,
      hasAnswered,
      voteOne,
      voteTwo
    } = question;

    const one_vote = optionOne.votes.length;
    const two_vote = optionTwo.votes.length;
    const total_vote = one_vote + two_vote;

    const one_percent = 100 * (one_vote / total_vote);
    const two_percent = 100 * (two_vote / total_vote);

    return (
      <div className="question-detail">
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
            {hasAnswered ? (
              <div className="question-box-right">
                <p className="title">Results</p>
                <div className={'answer-box' + ' ' + (voteOne ? 'active' : '')}>
                  {voteOne ? (
                    <div className="choice">
                      <p>your choice</p>
                    </div>
                  ) : (
                    ''
                  )}
                  <p className="question-text">{text1}</p>
                  <div className="total-bar">
                    <div
                      className="percent"
                      style={{ width: `${one_percent}%` }}
                    >
                      &nbsp;{one_percent}%&nbsp;
                    </div>
                  </div>
                  <p className="vote-detail">
                    {one_vote} out of {total_vote} votes
                  </p>
                </div>

                <div className={'answer-box' + ' ' + (voteTwo ? 'active' : '')}>
                  {voteTwo ? (
                    <div className="choice">
                      <p>your choice</p>
                    </div>
                  ) : (
                    ''
                  )}
                  <p className="question-text">{text2}</p>
                  <div className="total-bar">
                    <div
                      className="percent"
                      style={{ width: `${two_percent}%` }}
                    >
                      &nbsp;{two_percent}%&nbsp;
                    </div>
                  </div>
                  <p className="vote-detail">
                    {two_vote} out of {total_vote} votes
                  </p>
                </div>
              </div>
            ) : (
              <div className="question-box-right">
                <p className="title">Would you rather</p>
                <form>
                  <label>
                    <input type="radio" name="radioGroup" value="one" />
                    {optionOne.text}
                  </label>
                  <label>
                    <input type="radio" name="radioGroup" value="two" />
                    {optionTwo.text}
                  </label>
                  <button type="submit" className="view-poll">
                    Poll
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return {
    id,
    question: formatQuestion(question, users[question.author], authedUser)
  };
}

export default connect(mapStateToProps)(QuestionDetail);
