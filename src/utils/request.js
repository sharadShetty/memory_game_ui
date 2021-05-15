import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL || 'http://localhost:3001',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export default request;
