import { phone } from './phone';

describe('phone', () => {
  it('should return true if is valid', () => {
    expect(phone('35 1111-1111')).toBe(true);
  });

  it('should return true if is valid', () => {
    expect(phone('35 11111-1111')).toBe(true);
  });

  it('should return false if is invalid', () => {
    expect(phone('11111-1111')).toBe(false);
  });

  it('should return false if is invalid', () => {
    expect(phone('35 1111 1111')).toBe(false);
  });

  it('should return false if is invalid', () => {
    expect(phone('(35) 1111 1111')).toBe(false);
  });
});
