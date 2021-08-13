import * as actionTypes from './actionTypes';
import { UserServices } from '../../services';
import { getData } from '../../utils';

export const getUserProfileAction = data => dispatch => {
  //debug
  //   console.log('\n', 'USER_ID-action_get_user.js:', user_id);
  //   console.log('\n', 'TOKEN-action_get_user.js:', token);
  console.log('\n', 'DATA-action_get_user.js:', data);

  //   const data = () => {
  //     getData('user_profile').then(user_profile => {
  //       console.log(user_profile);
  //     });
  //   };

  console.log('DDDAATA:', data);

  dispatch(getUserProfileActionSuccess(data));
};

export const getUserProfileActionStart = () => ({
  type: actionTypes.GET_USER_PROFILE_START,
});

export const getUserProfileActionSuccess = user_profile_success => ({
  type: actionTypes.GET_USER_PROFILE_SUCCESS,
  payload: { user_profile_success },
});

export const getUserProfileActionFail = user_profile_fail => ({
  type: actionTypes.GET_USER_PROFILE_FAIL,
  payload: { user_profile_fail },
});
