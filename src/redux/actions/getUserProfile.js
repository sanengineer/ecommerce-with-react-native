import * as actionTypes from './actionTypes';
import { UserServices } from '../../services';
import { getData } from '../../utils';

export const getUserProfileAction = (user_id, token) => dispatch => {
  //debug
  console.log('\n', 'USER_ID-action_get_user.js:', user_id);
  console.log('\n', 'TOKEN-action_get_user.js:', token);

  UserServices.getUserProfile(user_id, token)
    .then(res => {
      //debug
      console.log('RESSSSS', res.data);
      dispatch(getUserProfileActionSuccess(res.data));
    })
    .catch(err => {
      //debug
      console.log('ERRR', err.data);
    });
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
