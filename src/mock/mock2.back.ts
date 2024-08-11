// 如果在配置文件开启了 automock ，from './mock2' 相当于 from '.__mocks__/mock2'
// 但是不建议开启，因为开启后，所有test文件
// 都会去 __mocks__ 里面找文件，这个有点恶心。
jest.mock('./mock2');
//
import { getData } from './mock2';

// 如果部分方法想在源文件中获取，可以使用 jest.requireActual
// requireActual 表示从真正的文件路径找目标！而不是__mocks__
const { getNumber } = jest.requireActual('./mock2');

describe('mock2', () => {
  test('mock2-axios', async () => {
    await expect(getData()).resolves.toEqual({ a: 3 });
    expect(getNumber()).toBe(100);
  });
});
