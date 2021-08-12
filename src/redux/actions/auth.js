import * as actionTypes from './actionTypes';
import { UserServices } from '../../services';
import { storeData } from '../../utils';
import { showMessage } from 'react-native-flash-message';

export const authRegisterAction =
  (auth_data_register, navigation) => dispatch => {
    //
    //debug
    console.log('auth_data:', auth_data_register);
    console.log('navigation:', navigation);

    UserServices.authRegister(auth_data_register)
      .then(res => {
        //
        //debug
        console.log('res', res.data);
        navigation.replace('Success Register');
      })
      .catch(err => {
        //
        //debug
        console.log('err:', err.message);
        // console.log('fail:', fail);
        showMessage({
          message: '🚨',
          description: err.message,
        }),
          dispatch(authRegisterActionFail(err));
      });
  };

export const authRegisterActionStart = () => ({
  type: actionTypes.AUTH_REGISTER_START,
});

export const authRegisterActionSuccess = auth_register_success => ({
  type: actionTypes.AUTH_REGISTER_SUCCESS,
  payload: { auth_register_success },
});

export const authRegisterActionFail = auth_register_fail => ({
  type: actionTypes.AUTH_REGISTER_FAIL,
  payload: { auth_register_fail },
});

export const authLoginAction = (auth_data_login, navigation) => dispatch => {
  //debug
  console.log('auth_data_login:', auth_data_login);
  console.log('navigation:', navigation);

  UserServices.authLogin(auth_data_login)
    .then(res => {
      //debug
      console.log('res', res.data);
      storeData('user', res.data);
      navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
    })
    .catch(err => {
      //debug
      console.log('err', err);
      showMessage({
        message: '🚨',
        description: err.message,
      }),
        dispatch(authLoginActionFail(err));
    });
};

export const authLoginActionStart = () => ({
  type: actionTypes.AUTH_LOGIN_START,
});

export const authLoginActionSuccess = auth_login_success => ({
  type: actionTypes.AUTH_LOGIN_SUCCESS,
  payload: { auth_login_success },
});

export const authLoginActionFail = auth_login_fail => ({
  type: actionTypes.AUTH_LOGIN_FAIL,
  payload: { auth_login_fail },
});
