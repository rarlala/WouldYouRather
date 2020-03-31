import { saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_ANSWER_USER = 'SAVE_ANSWER_USER';

function saveAnswerUser(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER_USER,
    authedUser,
    qid,
    answer
  };
}

export function handleSaveAnswerUser(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(dispatch(saveAnswerUser(authedUser, qid, answer)))
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}
