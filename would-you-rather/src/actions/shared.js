import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
import { setAuthedUser } from '../actions/authedUser';

const userId = 'sarahedo';

export function handleInitialDate() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(userId));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
