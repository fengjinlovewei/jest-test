// beforeAll(fn, timeout)
// timeout 表示超时限制时间
// 下面得钩子都有 timeout 参数
// 这些钩子都没有回调参数

/**
 * beforeAll、beforeEach、afterAll、afterEach
 * 这些钩子定义的位置放在哪里都能正常执行。
 *
 * 钩子函数的作用域以 describe 分组为单位
 * 并且父级作用域钩子优先级 > 子作用域的钩子
 */

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforeEach');
});

describe('', () => {
  beforeAll(() => {
    console.log('test-beforeAll');
  });
  afterAll(() => {
    console.log('test-afterAll');
  });
  test('test1', () => {
    expect(2).toBe(2);
  });

  test('test2', () => {
    expect(2).toBe(2);
  });
});

describe('', () => {
  test('other1', () => {
    expect(2).toBe(2);
  });

  test('other2', () => {
    expect(2).toBe(2);
  });
});

afterAll(() => {
  console.log('afterAll');
});

afterEach(() => {
  console.log('afterEach');
});
