import {
  GET_USER_PROFILE_FAIL,
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export default function getUserProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PROFILE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload.user_profile_success,
        error: null,
      };
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.user_profile_success,
      };
    default:
      return state;
  }
}
