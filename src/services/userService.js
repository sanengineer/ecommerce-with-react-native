// import api from './httpService';
// import envConfig from '../../env-config';
import axios from 'axios';
import { login, envConfig, user } from './hostnameServerApi';

// const api = new axios();

class UserServices {
  authLogin = auth_data => {
    //debug
    console.log('auth_data:', auth_data);

    return axios({
      method: 'post',
      url: `${login}`,
      headers: { authorization: `Basic ${auth_data}` },
    });
  };

  authRegister = auth_register_data => {
    //debug
    console.log('AUTH_REGISTER_DATA', auth_register_data);

    return axios({
      method: 'post',
      url: `${envConfig.LOCAL_API_PATH_REGISTER}`,
      data: auth_register_data,
    });
  };

  getUserProfile = (user_id, token) => {
    //debug
    console.log('TOKEEENNN', token);

    return axios({
      method: 'get',
      url: `${envConfig.LOCAL_API_PATH_USER}/${user_id}`,
      headers: { authorization: `Bearer ${token}` },
    });
  };

  createCartId = (user_id, token) => {
    let data = {
      user_id: `${user_id}`,
    };
    //debug
    console.log('CARTIDDD', token);
    console.log('CARTIDDD', user_id);
    console.log('DATAAA:', data);

    return axios({
      method: 'post',
      url: `${envConfig.LOCAL_API_PATH_CART}`,
      headers: { authorization: `Bearer ${token}` },
      data: data,
    });
  };

  getProducts = token => {
    return axios({
      method: 'get',
      url: `${envConfig.LOCAL_API_PATH_PRODUCT}`,
      headers: { authorization: `Bearer ${token}` },
    });
  };

  getCartId = (cart_id, token) => {
    return axios({
      method: 'get',
      url: `${envConfig.LOCAL_API_PATH_CART}/${cart_id}`,
      headers: { authorization: `Bearer ${token}` },
    });
  };

  getCategories = token => {
    return axios({
      method: 'get',
      url: `${envConfig.LOCAL_API_PATH_CATEGORY}`,
      headers: { authorization: `Bearer ${token}` },
    });
  };

  getCategoryById = (category_id, token) => {
    return axios({
      method: 'get',
      url: `${envConfig.LOCAL_API_PATH_CATEGORY}/${category_id}`,
      headers: { authorization: `Bearer ${token}` },
    });
  };
}

export default new UserServices();
