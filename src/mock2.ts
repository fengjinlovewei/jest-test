import axios from 'axios';

export const getData = () => {
  return axios.get('https://fengjinlovewei.com');
};

export const getNumber = () => {
  return 100;
};
