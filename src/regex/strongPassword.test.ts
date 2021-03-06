import { strongPassword } from './strongPassword';

describe('strongPassword', () => {
  it('should return null if the password is strong', () => {
    const password = 'Abc123!@#';
    expect(strongPassword(password)).toBeNull();
  });
  it('should return error with length', () => {
    const password = 'Abc123@';
    expect(strongPassword(password)).toEqual([
      'Password must be at least 8 characters long',
    ]);
  });

  it('should return error with lowercase', () => {
    const password = 'ABC123!@#';
    expect(strongPassword(password)).toEqual([
      'Password must contain at least one lowercase letter',
    ]);
  });

  it('should return error with uppercase', () => {
    const password = 'abc123!@#';
    expect(strongPassword(password)).toEqual([
      'Password must contain at least one uppercase letter',
    ]);
  });

  it('should return error with number', () => {
    const password = 'abcABC!@#';
    expect(strongPassword(password)).toEqual([
      'Password must contain at least one number',
    ]);
  });

  it('should return error with special character', () => {
    const password = 'abc123ABC';
    expect(strongPassword(password)).toEqual([
      'Password must contain at least one special character',
    ]);
  });
});
