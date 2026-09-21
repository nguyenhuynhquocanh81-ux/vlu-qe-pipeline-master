const { login } = require('./auth');

describe('Regression Test - Login exceptions', () => {
  test('Sai mật khẩu → trả về false', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('Username rỗng → trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rỗng → trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt sai → trả về false', () => {
    expect(login('admin', '!@#$123')).toBe(false);
  });

  test('Username sai (tài khoản không tồn tại) → trả về false', () => {
    expect(login('hacker', '123')).toBe(false);
  });
});
