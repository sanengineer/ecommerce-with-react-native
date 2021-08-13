import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_START,
  AUTH_LOGIN_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export default function authLoginReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.auth_login_success,
      };
    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload.auth_login_fail,
      };
    default:
      return state;
  }
}
