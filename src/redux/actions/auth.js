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

    UserServices.authRegister(auth_data_register)
      .then(res => {
        //
        //debug
        console.log('res', res.data);

        storeData('user_register', res.data);

        const user_id = res.data.id;
        const token = res.data.registrationToken;

        UserServices.getUserProfile(user_id, token)
          .then(res => {
            //debug
            console.log('RESSSSS', res.data);
            storeData('user_register', res.data);
          })
          .then(() => {
            navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
          })
          .catch(err => {
            //debug
            console.log('ERRR', err.data);
          });
        // navigation.replace('Success Register');
        dispatch(authRegisterActionSuccess(res.data));
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

  // const [loginDataRes, setLoginDataRes] = useState({});

  UserServices.authLogin(auth_data_login)
    .then(res => {
      //debug
      console.log('res', res.data);

      storeData('user_login', res.data);

      const user_id = res.data.userId;
      const token = res.data.tokenString;

      UserServices.getUserProfile(user_id, token)
        .then(res => {
          //debug
          console.log('RESSSSS', res.data);
          storeData('token', res.data.tokenString);
        })
        .then(() => {
          navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
        })
        .catch(err => {
          //debug
          console.log('ERRR', err.data);
        });

      dispatch(authLoginActionSuccess(res.data));
    })
    .catch(err => {
      //debug
      console.log('err', err);
      dispatch(authLoginActionFail(err));
      showMessage({
        message: '🚨',
        description: err.message,
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
