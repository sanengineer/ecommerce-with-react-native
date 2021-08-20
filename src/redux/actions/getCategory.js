import { UserServices } from '../../services';
import * as actionTypes from './actionTypes';

//category
export const getCategoryByIdAction = (category_id, token) => dispatch => {
  //debug
  console.log('\n', 'CATEGORY_ID-get_category.js', category_id, '\n');
  dispatch(getCategoryByIdActionStart());

  UserServices.getCategoryById(category_id, token)
    .then(res => {
      //debug
      console.log('\n', 'CATEGORY_DATA', res.data, '\n');
      dispatch(getCategoryByIdActionSuccess(res.data));
    })
    .catch(err => {
      //debug
      console.log('ERR-getCategory.js', err);
      dispatch(getCategoryByIdActionFail(err.data));
    });
};

export const getCategoryByIdActionStart = () => ({
  type: actionTypes.GET_CATEGORY_BYID_START,
});

export const getCategoryByIdActionSuccess = category_data => ({
  type: actionTypes.GET_CATEGORY_BYID_SUCCESS,
  payload: { category_data },
});

export const getCategoryByIdActionFail = category_data => ({
  type: actionTypes.GET_CATEGORY_BYID_FAIL,
  payload: { category_data },
});

//Categories
export const getCategoriesAction = token => dispatch => {
  //debug
  console.log('\n', 'CATEGORIES-get_category.js', token, '\n');
  dispatch(getCategoriesActionStart());

  UserServices.getCategories(token)
    .then(res => {
      //debug
      console.log('\n', 'CATEGORY_DATA', res.data, '\n');
      dispatch(getCategoriesActionSuccess(res.data));
    })
    .catch(err => {
      //debug
      console.log('ERR-getCategory.js', err.data);
      dispatch(getCategoriesActionFail(err.data));
    });
};

export const getCategoriesActionStart = () => ({
  type: actionTypes.GET_CATEGORIES_START,
});

export const getCategoriesActionSuccess = categories_data => ({
  type: actionTypes.GET_CATEGORIES_SUCCESS,
  payload: { categories_data },
});

export const getCategoriesActionFail = error => ({
  type: actionTypes.GET_CATEGORIES_FAIL,
  error: { error },
});
