jest.mock('./util');
/**
 * 注意：如果 jest.mock 的文件导出的是一个类，
 * 那么 jest 会把 Util + Util.a + Util.a 全部转化成 jest.fn
 * 这样，他们就都变成可以以追溯的函数了
 *
 * 如果你想自己写 jest.fn ，那么也可以创建一个 __mocks__文件夹
 * 对 Util 进行重写
 */

import Util from './util';
import demoFunction from './demo';

test('class-demo', () => {
  demoFunction(1, 2);
  demoFunction(3, 4);
  expect(Util).toHaveBeenCalled();
  expect((Util as any).mock.instances[0].a).toHaveBeenCalled();
  expect((Util as any).mock.instances[0].b).toHaveBeenCalled();
  console.log((Util as any).mock);
  // 可以获取到 Util.a 的 mock
  console.log((Util as any).mock.instances[0].a.mock);
});
