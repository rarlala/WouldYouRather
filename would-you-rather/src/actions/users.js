import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER';
export const SAVE_ANSWER_USER = 'SAVE_ANSWER_USER';

function addQuestionUser(user) {
  return {
    type: ADD_QUESTION_USER,
    user
  };
}

export function handleAddQuestionUser(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      author: authedUser
    })
      .then(question => dispatch(addQuestionUser(question)))
      .then(() => dispatch(hideLoading()));
  };
}

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
