/**
 * 详细内容参考官网
 * https://jestjs.io/zh-Hans/docs/expect#tohavebeencalledtimesnumber
 */

test('toBe测试', () => {
  // toBe 相当于 ===
  expect('007').toBe('007');
  //expect('007').toBe(7);
  //
});

test('toEqual测试', () => {
  // toEqual 相当于 结果相等
  const a = { a: 1 };
  expect(a).toEqual({ a: 1 });
  //
});

test('toBeNull测试', () => {
  // toEqual 相当于 结果相等
  const a = null;
  expect(a).toBeNull();
  //
});

test('toBeUndefined测试', () => {
  const a = undefined;
  expect(a).toBeUndefined();
  //
});

// 这个相当于当前检测对象不为undefined，也就是必须已经定义了。
test('toBeDefined测试', () => {
  // const a = undefined;
  const a = Math.random();
  expect(a).toBeDefined();
  //
});

// 只要结果可以 == true，那么就通过
test('toBeTruthy', () => {
  // const a = undefined;
  const a = Math.random();
  expect(a).toBeTruthy();
  //
});

// 只要结果可以 == false，那么就通过
test('toBeFalsy', () => {
  // const a = 1;
  const a = 0;
  expect(a).toBeFalsy();
  //
});

/**
 * 数字相关
 */

// a必须 > 目标
test('toBeGreaterThan', () => {
  // const a = 1;
  const a = 10;
  expect(a).toBeGreaterThan(9);
  //
});

// a必须 >= 目标
test('toBeGreaterThanOrEqual', () => {
  // const a = 1;
  const a = 9;
  expect(a).toBeGreaterThanOrEqual(9);
  //
});

// a必须 < 目标
test('toBeLessThan', () => {
  // const a = 1;
  const a = 8;
  expect(a).toBeLessThan(9);
  //
});

// a必须 <= 目标
test('toBeLessThanOrEqual', () => {
  // const a = 1;
  const a = 8;
  expect(a).toBeLessThanOrEqual(9);
  //
});

// 解决精度问题
test('toBeCloseTo', () => {
  const a = 0.1 + 0.2;
  // expect(a).toBe(0.3); 报错
  expect(a).toBeCloseTo(0.3);
});

/**
 *
 *
 */

// 字符串匹配
test('toMatch', () => {
  const a = 'fengjin+zhangwei';
  expect(a).toMatch('fengjin');
});

// 数组匹配
test('toContain', () => {
  const a = ['fengjin', 'zhangwei'];
  const b = new Set([...a]);
  // const c = new WeakSet([...a]); 报错

  expect(a).toContain('zhangwei');
  expect(b).toContain('zhangwei');
  // expect(c).toContain('zhangwei');
});

const getError = () => {
  throw new Error('err');
};

const getSuccess = () => {};

test('toThrow', () => {
  // toThrow 如果有参数必须和抛出的错误一致
  expect(getError).toThrow('err');
  // 添加not就是不能有报错才通过，相当于取反
  expect(getSuccess).not.toThrow();
});

/***
 * 处理异步的3种方式
 */
const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ a: 1 });
    }, 1000);
  });
};

test('async', async () => {
  const data = await getData();
  expect(data).toEqual({ a: 1 });
});

test('done', (done) => {
  // toThrow 如果有参数必须和抛出的错误一致
  getData().then((data) => {
    expect(data).toEqual({ a: 1 });
    done();
  });
});

// 也可以直接return这个promise，也能达到async的效果
test('async', () => {
  return getData().then((data) => {
    expect(data).toEqual({ a: 1 });
  });
});

/***
 * 异步处理错误
 */

// 如果 getData 不报错，那么就不会执行 catch 里的 expect
// 想要必须执行这个 expect ，可以使用 expect.assertions(1);
// 表示必须执行一次 expect
test.skip('asyncError', () => {
  expect.assertions(1);
  return getData().catch((err) => {
    expect(err).toBeTruthy();
  });
});
