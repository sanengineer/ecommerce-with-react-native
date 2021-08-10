import { actionTypes } from '..';
import { UserServices } from '../../services';

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
