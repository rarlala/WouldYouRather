import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    return (
      <ul className="leaderBoard">
        {users.map(user => (
          <li key={user.id} className="leaderBoard-list">
            <div className="leaderBoard-box-left">
              <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className="avatar"
              />
            </div>
            <div className="leaderBoard-box-center">
              <h2>{user.name}</h2>
              <p>
                <span>Answered question</span>
                <span>{Object.keys(user.answers).length}</span>
              </p>
              <hr />
              <p>
                <span>Created question</span>
                <span>{user.questions.length}</span>
              </p>
            </div>
            <div className="leaderBoard-box-right">
              <p className="score">Score</p>
              <p className="score-text">
                {Object.keys(user.answers).length + user.questions.length}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userScore = user =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a))
  };
};

export default connect(mapStateToProps)(LeaderBoard);
