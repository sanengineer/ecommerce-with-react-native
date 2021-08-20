import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export default function getProdutsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.products_data,
      };
    case GET_PRODUCTS_FAIL: {
      return {
        ...state,
        data: null,
        error: action.error.error,
      };
    }
    default:
      return state;
  }
}
