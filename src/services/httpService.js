import axios from 'axios';
import envConfig from '../../env-config';
import { hostname, port, cloudUrl, login } from './hostnameServerApi';

const api = axios.create({
  baseURL: `${cloudUrl}`,
  headers: {
    'content-type': 'application/json',
  },
});

//
//debug
console.log('API:', `${cloudUrl}`, '\n', 'URL: ' + login);

export default api;
