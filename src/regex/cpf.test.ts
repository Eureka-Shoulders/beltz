import { cpf } from './cpf';

describe('cpf', () => {
  it('should return true if is valid', () => {
    expect(cpf('123.456.789-09')).toBe(true);
  });
  it('should return false if is invalid', () => {
    expect(cpf('123.456789-10')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cpf('123.4567.8911')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cpf('123456789-12')).toBe(false);
  });
});
