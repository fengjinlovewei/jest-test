import { timer3 } from './timer';

jest.useFakeTimers();

// 这个测试是做了一个阻塞测试，结果确实出现很多问题
// 目前这些问题还不知道什么原因！
test('timer-advanceTimersByTime-2', () => {
  const fn = jest.fn();
  timer3(fn);
  jest.advanceTimersByTime(7000); // 这以这个调用必须在setTimeout之后
  expect(fn).toHaveBeenCalledTimes(1);
});
