import { UserServices } from '../../services';
import * as actionTypes from './actionTypes';

export const getProductsAction = token => dispatch => {
  //debug
  console.log('\n', 'PRODUCTS-get_products.js', token);
  // dispatch(getProductsActionStart());

  UserServices.getProducts(token)
    .then(res => {
      //debug
      console.log('\n', 'PRODUCTS_DATA:', res.statusText, '\n');
      dispatch(getProductsActionSuccess(res.data));
    })
    .catch(error => {
      //debug
      console.log('ERR-getProduct.js', error);
      dispatch(getProductsActionFail(error.data));
    });
};

// export const getProductsActionStart = () => ({
//   type: actionTypes.GET_PRODUCTS_START,
// });

export const getProductsActionSuccess = products_data => ({
  type: actionTypes.GET_PRODUCTS_SUCCESS,
  payload: { products_data },
});

export const getProductsActionFail = error => ({
  type: actionTypes.GET_PRODUCTS_FAIL,
  error: { error },
});
