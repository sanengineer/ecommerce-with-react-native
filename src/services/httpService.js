import axios from 'axios';
import envConfig from '../../env-config';

const api = axios.create({
  baseURL: `http://${envConfig.LOCAL_API_HOSTNAME}:${envConfig.LOCAL_API_PORT}/${envConfig.LOCAL_API_VERSION}`,
  headers: {
    'content-type': 'application/json',
  },
});

//debug
console.log(
  `http://${envConfig.LOCAL_API_HOSTNAME}:${envConfig.LOCAL_API_PORT}/${envConfig.LOCAL_API_VERSION}`,
);

export default api;
