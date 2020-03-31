import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleAuthedUser() {
  let userId = 'null';

  return dispatch => {
    if (userId !== 'null') {
      handleInitialDate();
    }
    dispatch(setAuthedUser(userId));
  };
}

export function handleInitialDate() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
