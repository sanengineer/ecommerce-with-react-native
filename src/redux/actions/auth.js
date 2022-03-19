import * as actionTypes from './actionTypes';
import { UserServices } from '../../services';
import { getData, storeData } from '../../utils';
import { showMessage } from 'react-native-flash-message';

export const authRegisterAction =
  (auth_data_register, navigation) => dispatch => {
    //
    //debug
    console.log('auth_data:', auth_data_register);
    console.log('navigation:', navigation);

    dispatch(authRegisterActionStart());
    UserServices.authRegister(auth_data_register)
      .then(res => {
        //
        //debug
        console.log('\n', 'AUTH_REGISTER_RESPONDATA', res.status, '\n');

        storeData('user', res.data);

        const user_id = res.data.id;
        const token = res.data.registrationToken;

        // UserServices.getUserProfile(user_id, token)
        //   .then(res_profile => {
        //     //debug
        //     console.log(
        //       '\n',
        //       'GET_USERPROFILE_RESPONDATA',
        //       res_profile.data,
        //       '\n',
        //     );
        //     storeData('user_profile', res_profile.data);
        //     // dispatch(getUserProfileActionSuccess(res_profile.data));
        //   })
        //   .then(() => {
        //     UserServices.createCartId(user_id, token)
        //       .then(res_cart_id => {
        //         //debug
        //         console.log(
        //           '\n',
        //           'CREATE_CARTID_RESPONDATA',
        //           res_cart_id.data,
        //           '\n',
        //         );
        //         storeData('cart_id', res_cart_id.data);
        //       })
        //       .catch(err_cart_id => {
        //         //debug
        //         console.log('ERRR', err_cart_id.data);
        //       });
        //   })
        //   .catch(err_profile_id => {
        //     //debug
        //     console.log('ERRR', err_profile_id.data);
        //   });
        // navigation.replace('Success Register');
        dispatch(authRegisterActionSuccess(res.data));
      })
      .then(() => {
        navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
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

  dispatch(authLoginActionStart());
  UserServices.authLogin(auth_data_login)
    .then(res => {
      //debug
      console.log('RES_AUTH', res.status);

      storeData('user', res.data);
      res.status == 200 &&
        navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
      dispatch(authLoginActionSuccess(res.data));
    })
    .catch(err => {
      //debug
      console.log('err', err);
      dispatch(authLoginActionFail(err));
      showMessage({
        message: '🚨',
        description: 'Email or password is incorrect',
      });
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
