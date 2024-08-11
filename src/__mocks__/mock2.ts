export const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ a: 3 });
    }, 500);
  });
};
