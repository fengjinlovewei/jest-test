import { runCallback, creatObject, getData } from './mock';

import axios from 'axios';
jest.mock('axios');

describe('mock', () => {
  test('runCallback', () => {
    // 这个函数的返回值信息在 func.mock.results
    const func = jest.fn(() => {
      return 100;
    });

    // 这个写法可以覆盖 jest.fn 的第一个参数函数
    // 它也有 once 特性
    // func.mockImplementation(() => {
    //   return 200;
    // });

    // 这个和上面的定义方法是等价的
    // func.mockReturnValue(100);

    // 还可以规定第一次返回啥，第二次返回啥
    // func.mockReturnValueOnce(1);
    // func.mockReturnValueOnce(2);
    // func.mockReturnValueOnce(3);

    runCallback(func);
    runCallback(func);

    // 表示这个函数已经执行过
    expect(func).toBeCalled(); // 这个已经废弃了
    expect(func).toHaveBeenCalled();

    // 用几种方法来验证 scheduler 被调了几次
    expect(func).toHaveBeenCalledTimes(2);
    expect(func.mock.calls.length).toBe(2);

    // 验证参数 func.mock.calls 是一个数组，调用2次结果如下
    // calls: [ [ 'a', 'b' ], [ 'a', 'b' ] ]
    // calls 的 length 就代表调用了几次，
    // calls[0] 就是第一次调用的参数数据，call[1]以此类推。
    expect(func.mock.calls[0]).toEqual(['a', 'b']);

    // 每一次调用的参数都必须包含目标
    expect(func).toBeCalledWith('a', 'b'); // 废弃了
    expect(func).toHaveBeenCalledWith('a', 'b');

    console.log(func.mock);
  });

  test('creatObject', () => {
    const func = jest.fn();
    creatObject(func);
    console.log(func.mock);
    // 可以看到，contexts 和 instances 都指向了func的内部this
    // contexts: [ { a: 1 } ],
    // instances: [ { a: 1 } ],
  });

  test('axios', async () => {
    // 修改返回请求回来的数据

    // 这个是一种写法
    // (axios.get as any).mockResolvedValue({ a: 1 });
    // return expect(getData()).resolves.toEqual({ a: 1 });

    // 还可以规定每次调用返回不同的数据
    (axios.get as any).mockResolvedValueOnce({ a: 1 });
    (axios.get as any).mockResolvedValueOnce({ a: 2 });
    await getData().then((res) => {
      expect(res).toEqual({ a: 1 });
    });

    await getData().then((res) => {
      expect(res).toEqual({ a: 2 });
    });
  });

  test.only('mock-axios', async () => {
    await getData().then((res) => {
      expect(res).toEqual({ a: 1 });
    });
  });
});
