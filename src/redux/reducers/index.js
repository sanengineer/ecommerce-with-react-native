import { combineReducers } from 'redux';

import authRegisterReducer from './authRegisterReducer';

export default combineReducers({
  auth_register_reducer: authRegisterReducer,
});
