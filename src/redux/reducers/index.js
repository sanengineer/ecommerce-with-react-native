import { combineReducers } from 'redux';
import authLoginReducer from './authLoginReducer';
import authRegisterReducer from './authRegisterReducer';
import getUserProfileReducer from './getUserProfile';

export default combineReducers({
  auth_register_data: authRegisterReducer,
  auth_login_res_data: authLoginReducer,
  get_user_profile: getUserProfileReducer,
});
