const { login } = require('./auth');

test('Smoke Test: login thành công với tài khoản đúng (admin/123)', () => {
  expect(login('admin', '123')).toBe(true);
});
