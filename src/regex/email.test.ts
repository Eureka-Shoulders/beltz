import { email } from './email';

describe('email', () => {
  it('1 - should return true if the email is valid', () => {
    const emailAddress = 'test@gmail.com';
    expect(email(emailAddress)).toBeTruthy();
  });

  it('2 - should return true if the email is valid', () => {
    const emailAddress = 'te.st@gmail.com';
    expect(email(emailAddress)).toBeTruthy();
  });

  it('3 - should return true if the email is valid', () => {
    const emailAddress = 'test@gmail.com';
    expect(email(emailAddress)).toBeTruthy();
  });

  it('1 - should return false if the email is invalid', () => {
    const emailAddress = '@asd@gmail.com';
    expect(email(emailAddress)).toBeFalsy();
  });

  it('2 - should return false if the email is invalid', () => {
    const emailAddress = 'te.st@gmail';
    expect(email(emailAddress)).toBeFalsy();
  });
  it('3 - should return false if the email is invalid', () => {
    const emailAddress = '@gmail.com';
    expect(email(emailAddress)).toBeFalsy();
  });
});
