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
  register: authRegisterReducer,
  auth_login: authLoginReducer,
  get_user_profile: getUserProfileReducer,
  get_products: getProdutsReducer,
  get_category_by_id: getCategoryByIdReducer,
  get_categories: getCategoriesReducer,
});
