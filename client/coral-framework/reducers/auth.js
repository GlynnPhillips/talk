import * as actions from '../constants/auth';

const initialState = {
  checkedInitialLogin: false,
  initialLoginError: null,
  user: null,
};

const purge = user => {
  const {settings, ...userData} = user; // eslint-disable-line
  return userData;
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.CHECK_LOGIN_FAILURE:
      return {
        ...state,
        initialLoginError: action.error,
        checkedInitialLogin: true,
        user: null,
      };
    case actions.CHECK_LOGIN_SUCCESS:
      return {
        ...state,
        checkedInitialLogin: true,
        user: action.user ? purge(action.user) : null,
      };
    case actions.HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        user: action.user ? purge(action.user) : null,
      };
    case actions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
