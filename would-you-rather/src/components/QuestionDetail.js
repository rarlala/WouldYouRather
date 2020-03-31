import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { handleSaveAnswer } from '../actions/questions';

class QuestionDetail extends Component {
  state = {
    answer: ''
  };

  handleClick = e => {
    this.setState({
      answer: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit complete');

    const { answer } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleSaveAnswer(id, answer));
  };

  render() {
    const { question, answer } = this.props;

    if (question === null) {
      return <p>No Question</p>;
    }

    const {
      name,
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

    const one_percent = (100 * (one_vote / total_vote)).toFixed(2);
    const two_percent = (100 * (two_vote / total_vote)).toFixed(2);

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
                <div className={'answer-box ' + (voteOne ? 'active' : '')}>
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

                <div className={'answer-box ' + (voteTwo ? 'active' : '')}>
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
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input
                      type="radio"
                      name="poll"
                      value="optionOne"
                      onChange={this.handleClick}
                    />
                    {optionOne.text}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="poll"
                      value="optionTwo"
                      onChange={this.handleClick}
                    />
                    {optionTwo.text}
                  </label>
                  <button
                    type="submit"
                    className="view-poll"
                    disabled={answer === ''}
                  >
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
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser)
  };
}

export default connect(mapStateToProps)(QuestionDetail);
