import api from './httpService';
import envConfig from '../../env-config';

class UserServices {
  authLogin = auth_data => {
    //debug
    console.log('auth_data:', auth_data);

    return api.post(
      `/${envConfig.LOCAL_API_PATH_LOGIN}`,
      {},
      {
        headers: { authorization: `Basic ${auth_data}` },
      },
    );
  };

  authRegister = auth_register_data => {
    //debug
    console.log('AUTH_REGISTER_DATA', auth_register_data);

    return api.post(
      `/${envConfig.LOCAL_API_PATH_REGISTER}`,
      auth_register_data,
    );
  };

  getUserProfile = (user_id, token) => {
    //debug
    console.log('TOKEEENNN', token);

    return api.get(`/${envConfig.LOCAL_API_PATH_USER}/${user_id}`, {
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

    return api.post(`/${envConfig.LOCAL_API_PATH_CART}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  getProducts = token => {
    return api.get(`/${envConfig.LOCAL_API_PATH_PRODUCT}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  getCartId = (cart_id, token) => {
    return api.get(`/${envConfig.LOCAL_API_PATH_CART}/${cart_id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  getCategories = token => {
    return api.get(`/${envConfig.LOCAL_API_PATH_CATEGORY}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  getCategoryById = (category_id, token) => {
    return api.get(`/${envConfig.LOCAL_API_PATH_CATEGORY}/${category_id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
}

export default new UserServices();
