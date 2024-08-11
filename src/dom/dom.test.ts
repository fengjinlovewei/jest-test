import { setDiv } from './dom';

/**
 * node 不具备 dom
 * 但是 jest 在 node 环境下自己模拟了一套 dom 的 api
 * 也就是 jsDom
 */

test('setDiv', () => {
  setDiv();
  setDiv();
  const body = document.getElementsByTagName('body')[0];
  expect(body.children.length).toBe(2);
});
