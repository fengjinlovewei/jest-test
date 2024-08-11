// 由于开启了 automock ，
// from './mock2' 相当于 from '.__mocks__/mock2'
import { getData } from './mock2';

// requireActual 表示从真正的文件路径找目标！而不是__mocks__
const { getNumber } = jest.requireActual('./mock2');

describe('mock2', () => {
  test.only('mock2-axios', async () => {
    expect(getData()).resolves.toEqual({ a: 3 });
    expect(getNumber()).toBe(100);
  });
});
