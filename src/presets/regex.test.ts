import { regexPresets } from './regex';

const { cep, cnpj, cpf, email, phone } = regexPresets;

describe('regex cep', () => {
  it('should return true if is valid', () => {
    expect(cep.test('37540-000')).toBe(true);
  });
  it('should return false if is invalid', () => {
    expect(cep.test('37540-00')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cep.test('37540000')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cep.test('375-000')).toBe(false);
  });
});

describe('regex cnpj', () => {
  it('should return true if is valid', () => {
    expect(cnpj.test('11.111.111/1111-11')).toBe(true);
  });
  it('should return false if is invalid', () => {
    expect(cnpj.test('11111.111/1111-11')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cnpj.test('11.111111/1111-11')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cnpj.test('11.111.1111111-11')).toBe(false);
  });
});

describe('regex cpf', () => {
  it('should return true if is valid', () => {
    expect(cpf.test('123.456.789-09')).toBe(true);
  });
  it('should return false if is invalid', () => {
    expect(cpf.test('123.456789-10')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cpf.test('123.4567.8911')).toBe(false);
  });
  it('should return false if is invalid', () => {
    expect(cpf.test('123456789-12')).toBe(false);
  });
});

describe('regex email', () => {
  it('1 - should return true if the email is valid', () => {
    const emailAddress = 'test@gmail.com';
    expect(email.test(emailAddress)).toBeTruthy();
  });

  it('2 - should return true if the email is valid', () => {
    const emailAddress = 'te.st@gmail.com';
    expect(email.test(emailAddress)).toBeTruthy();
  });

  it('3 - should return true if the email is valid', () => {
    const emailAddress = 'test@gmail.com';
    expect(email.test(emailAddress)).toBeTruthy();
  });

  it('1 - should return false if the email is invalid', () => {
    const emailAddress = '@asd@gmail.com';
    expect(email.test(emailAddress)).toBeFalsy();
  });

  it('2 - should return false if the email is invalid', () => {
    const emailAddress = 'te.st@gmail';
    expect(email.test(emailAddress)).toBeFalsy();
  });
  it('3 - should return false if the email is invalid', () => {
    const emailAddress = '@gmail.com';
    expect(email.test(emailAddress)).toBeFalsy();
  });
});

describe('regex phone', () => {
  it('should return true if is valid', () => {
    expect(phone.test('35 1111-1111')).toBe(true);
  });

  it('should return true if is valid', () => {
    expect(phone.test('35 11111-1111')).toBe(true);
  });

  it('should return false if is invalid', () => {
    expect(phone.test('11111-1111')).toBe(false);
  });

  it('should return false if is invalid', () => {
    expect(phone.test('35 1111 1111')).toBe(false);
  });

  it('should return false if is invalid', () => {
    expect(phone.test('(35) 1111 1111')).toBe(false);
  });
});
