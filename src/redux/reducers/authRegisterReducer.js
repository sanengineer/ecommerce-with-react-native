import {
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_START,
  AUTH_REGISTER_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  auth_form: {},
  error: null,
};

export default function authRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REGISTER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        auth_form: action.payload.auth_register_success,
      };
    case AUTH_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default: {
      return state;
    }
  }
}
