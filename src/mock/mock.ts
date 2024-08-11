import axios from 'axios';

export const runCallback = (callback) => {
  callback('a', 'b');
};

export const creatObject = (classItem) => {
  const obj = { a: 1 };
  classItem.call(obj);
};

export const getData = () => {
  return axios.get('https://fengjinlovewei.com');
};
