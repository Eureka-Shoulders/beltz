import { isValidDate } from './validation';

describe('isValidDate', () => {
  it('should return `true` if the date is valid', () => {
    const date = new Date('2003-01-13');
    expect(isValidDate(date)).toBe(true);
  });
  it('should return `false` if the date is not valid', () => {
    const date = '';
    expect(isValidDate(date)).toBe(false);
  });

  it('should return `false` if the date is not valid', () => {
    const date = '0)*&^%$#@!@';
    expect(isValidDate(date)).toEqual(false);
  });
});
