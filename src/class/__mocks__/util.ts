const Util = jest.fn(() => {
  console.log('constructor');
});
Util.prototype.a = jest.fn(() => {
  console.log('a方法');
});
Util.prototype.b = jest.fn(() => {
  console.log('b方法');
});

export default Util;
