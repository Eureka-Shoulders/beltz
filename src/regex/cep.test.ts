import { cep } from './cep';

describe('cep', () => {
  it('should return true if is valid', () => {
    expect(cep('37540-000')).toBe(true);
  });
  it('should return false if is invalid', () => {
    expect(cep('37540-00')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cep('37540000')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cep('375-000')).toBe(false);
  });
});
