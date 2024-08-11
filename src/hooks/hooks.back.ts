// beforeAll(fn, timeout)
// timeout 表示超时限制时间
// 下面得钩子都有 timeout 参数
// 这些钩子都没有回调参数

/**
 * beforeAll、beforeEach、afterAll、afterEach
 * 这些钩子定义的位置放在哪里都能正常执行。
 *
 * beforeAll 和  afterAll 是在整个文件的开始和结束执行一次
 * 也就是整个文件的执行周期中只运行一次
 *
 * beforeEach 和 afterEach 是在每一次 test 测试前后都会执行一次
 * 也就是整个文件的执行周期中可以运行无数次
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

describe('第一组-有', () => {
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

describe('第二组-没有', () => {
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
