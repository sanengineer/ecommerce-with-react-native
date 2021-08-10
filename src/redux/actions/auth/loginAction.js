import * as actionTypes from './actionTypes';
import { UserServices } from '../../services';

export const authLoginAction = (auth_data_login, navigation) => dispatch => {
  //debug
  console.log('auth_data_login', auth_data_login);

  UserServices.authLogin(auth_data_login)
    .then(res => {
      //debug
      console.log('res', res);
    })
    .catch(err => {
      //debug
      console.log('err', err);

      dispatch(authLoginAction(err));
    });
};

export const authLoginActionStart = () => ({
  type: actionTypes.AUTH_LOGIN_START,
});

export const authLoginActionSuccess = auth_login_success => ({
  type: actionTypes.AUTH_REGISTER_SUCCESS,
  payload: { auth_login_success },
});

export const authLoginActionFail = auth_login_fail => ({
  type: actionTypes.AUTH_REGISTER_FAIL,
  payload: { auth_login_fail },
});
