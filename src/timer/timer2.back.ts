import { timer2 } from './timer';

jest.useFakeTimers();

/**
 * 注意，advanceTimersByTime可能会影响全局的所有测试，
 * 看如下的例子，
 * 这个例子确实能通过测试，但是项目不能保证永远都正确！
 */
describe.skip('t1', () => {
  test('timer-advanceTimersByTime-3', () => {
    const fn = jest.fn();
    timer2(fn);
    jest.advanceTimersByTime(3000); // 这以这个调用必须在setTimeout之后
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('timer-advanceTimersByTime-4', () => {
    const fn = jest.fn();
    timer2(fn);
    jest.advanceTimersByTime(3000); // 这以这个调用必须在setTimeout之后
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});

/**
 * 为了安全起见，我们需要在每个测试用例之前，初始化 jest.useFakeTimers();
 */

beforeEach(() => {
  jest.useFakeTimers();
});

describe('t2', () => {
  test('timer-advanceTimersByTime-3', () => {
    const fn = jest.fn();
    timer2(fn);
    jest.advanceTimersByTime(3000); // 这以这个调用必须在setTimeout之后
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('timer-advanceTimersByTime-4', () => {
    const fn = jest.fn();
    timer2(fn);
    jest.advanceTimersByTime(3000); // 这以这个调用必须在setTimeout之后
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
