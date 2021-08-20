import {
  GET_CATEGORY_BYID_FAIL,
  GET_CATEGORY_BYID_START,
  GET_CATEGORY_BYID_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
} from '../actions/actionTypes';

const initialStateGetCategoryById = {
  loading: false,
  data: {},
  error: null,
};

const initialStateGetCategories = {
  loading: true,
  data: [],
  error: null,
};

//category
export function getCategoryByIdReducer(
  state = initialStateGetCategoryById,
  action,
) {
  switch (action.type) {
    case GET_CATEGORY_BYID_START:
      return {
        ...state,
        data: null,
        loading: true,
      };
    case GET_CATEGORY_BYID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.category_data,
      };
    case GET_CATEGORY_BYID_FAIL:
      return {
        ...state,
        data: null,
        error: action.payload.category_data.data,
      };
    default:
      return state;
  }
}

//categories
export function getCategoriesReducer(
  state = initialStateGetCategories,
  action,
) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.categories_data,
        error: null,
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        data: null,
        error: action.error.error,
      };
    default:
      return state;
  }
}
