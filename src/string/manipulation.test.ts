import {
  capitalizeString,
  onlyNumbers,
  removeWhitespace,
} from './manipulation';

describe('capitalizeString', () => {
  it('should return a name capitalized', () => {
    const result = capitalizeString('john');

    expect(result).toEqual('John');
  });

  it('should return a string capitalized', () => {
    const result = capitalizeString('chopper');

    expect(result).toEqual('Chopper');
  });
});

describe('onlyNumbers', () => {
  it('should return only numbers by string', () => {
    const result = onlyNumbers('1j2o2h3n');

    expect(result).toEqual('1223');
  });

  it('should return only numbers by empty string', () => {
    const result = onlyNumbers('chopper');

    expect(result).toEqual('');
  });
});

describe('removeWhitespace', () => {
  it('should return a string without whitespace', () => {
    const result = removeWhitespace('john');

    expect(result).toEqual('john');
  });

  it('should return string without whitespace by empty string', () => {
    const result = removeWhitespace(' cho   p per    ');

    expect(result).toEqual('chopper');
  });
});
