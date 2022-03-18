import { cnpj } from './cnpj';

describe('cnpj', () => {
  it('should return true if is valid', () => {
    expect(cnpj('11.111.111/1111-11')).toBe(true);
  });
  it('should return false if is invalid', () => {
    expect(cnpj('11111.111/1111-11')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cnpj('11.111111/1111-11')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cnpj('11.111.1111111-11')).toBe(false);
  });
});
