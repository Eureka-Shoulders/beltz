import { validateCNPJ } from './cnpj';

describe('isValidCNPJ', () => {
  it('should return `true` if the cnpj is valid', () => {
    const cnpj = '27155657000184';
    expect(validateCNPJ(cnpj)).toBe(true);
  });

  it('should return `true` if the cnpj with signals is valid', () => {
    const cnpj = '27.155.657/0001-84';
    expect(validateCNPJ(cnpj)).toBe(true);
  });

  it('should return `false` if the cnpj is valid not valid', () => {
    const cnpj = '99.999.999/9999-99';
    expect(validateCNPJ(cnpj)).toBe(false);
  });
});
