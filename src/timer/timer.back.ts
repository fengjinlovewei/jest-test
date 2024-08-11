import { timer1, timer2 } from './timer';

/**
 * 我们可以使用 done 这种方法测试
 * 但是，如果定时器时间过长，测试就必须长时间等待，对测试不利。
 */

test.skip('timer-done', (done) => {
  timer1(() => {
    expect(1).toBe(1);
    done();
  });
});

/**
 * 还可以使使用模拟定时器的特定 api 来处理
 * 这样他就可以不用等待定时器的时间，而是立即执行，速度很快！
 * jest.runAllTimers 必须和 jest.useFakeTimers 配合使用
 */

// 注意：jest.useFakeTimers 没有作用域的概念，只要执行了
// 整个文件内的测试都会受到影响，定义 describe 也没用！

jest.useFakeTimers();

test.skip('timer-runAllTimers-1', () => {
  const fn = jest.fn();
  timer1(fn);
  jest.runAllTimers(); // 这以这个调用必须在setTimeout之后
  expect(fn).toHaveBeenCalledTimes(1);
});

// 产生的问题：
// 如果我有两个嵌套的setTimeout，两个都会立即执行
// 查看下面的例子，他会立即完成2次调用

test.skip('timer-runAllTimers-2', () => {
  const fn = jest.fn();
  timer2(fn);
  jest.runAllTimers(); // 这以这个调用必须在setTimeout之后
  expect(fn).toHaveBeenCalledTimes(2);
});

// 如果你只想运行第一层宏队列的setTimeout，可以使用
// runOnlyPendingTimers, 他也是依赖于 useFakeTimers 的

test.skip('timer-runOnlyPendingTimers', () => {
  const fn = jest.fn();
  timer2(fn);
  jest.runOnlyPendingTimers(); // 这以这个调用必须在setTimeout之后
  expect(fn).toHaveBeenCalledTimes(1);
});

/**
 * 实际上，更推荐的是另外一个api，它可以解决上述所有问题
 * advanceTimersByTime, 它属于快进了几秒
 */

test.skip('timer-advanceTimersByTime-1', () => {
  const fn = jest.fn();
  timer2(fn);
  jest.advanceTimersByTime(3000); // 这以这个调用必须在setTimeout之后
  expect(fn).toHaveBeenCalledTimes(1);
});

// 快进 6秒 把两个定时器都执行完

test.skip('timer-advanceTimersByTime-2', () => {
  const fn = jest.fn();
  timer2(fn);
  jest.advanceTimersByTime(6000); // 这以这个调用必须在setTimeout之后
  expect(fn).toHaveBeenCalledTimes(2);
});

// 还可以这么写

test('timer-advanceTimersByTime-3', () => {
  const fn = jest.fn();
  timer2(fn);
  jest.advanceTimersByTime(3000); // 这以这个调用必须在setTimeout之后
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
});
