import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'http://35.197.155.134',
});

export default instance;
