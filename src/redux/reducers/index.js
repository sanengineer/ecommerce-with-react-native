import { combineReducers } from 'redux';
import authLoginReducer from './authLoginReducer';
import authRegisterReducer from './authRegisterReducer';
import {
  getCategoriesReducer,
  getCategoryByIdReducer,
} from './getCategoryReducer';
import getProdutsReducer from './getProducts';
import getUserProfileReducer from './getUserProfile';

export default combineReducers({
  auth_register_data: authRegisterReducer,
  auth_login_res_data: authLoginReducer,
  get_user_profile: getUserProfileReducer,
  get_products: getProdutsReducer,
  get_category_by_id: getCategoryByIdReducer,
  get_categories: getCategoriesReducer,
});
