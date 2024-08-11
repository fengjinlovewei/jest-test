import { baojian1, baojian2 } from './dabaojian';

test.skip('保健1方法-300元', () => {
  expect(baojian1(300)).toBe('至尊享受');
});

test.skip('保健1方法-100元', () => {
  expect(baojian1(100)).toBe('基本按摩');
});

test.skip('保健2方法-2000元', () => {
  expect(baojian2(2000)).toBe('双人服务');
});
