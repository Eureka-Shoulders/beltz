import { validateCPF } from './validation';

describe('isValidCpf', () => {
  it('should return `true` if the cpf is valid', () => {
    const cpf = '77331764330';
    expect(validateCPF(cpf)).toBe(true);
  });

  it('should return `true` if the cpf with signals is valid', () => {
    const cpf = '773.317.643-30';
    expect(validateCPF(cpf)).toBe(true);
  });

  it('should return `false` if the cpf is valid not valid', () => {
    const cpf = '999.999.999-99';
    expect(validateCPF(cpf)).toBe(false);
  });
});
